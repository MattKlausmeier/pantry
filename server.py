#!/usr/bin/env python3
import http.server
import ssl
import sys

def get_ssl_context(certfile, keyfile):
    context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
    context.load_cert_chain(certfile, keyfile)
    context.set_ciphers("@SECLEVEL=1:ALL")
    return context

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers["Content-Length"])
        post_data = self.rfile.read(content_length)
        print(post_data.decode("utf-8"))

server_name = sys.argv[1]
server_address = (server_name, 5000)
httpd = http.server.HTTPServer(server_address, MyHandler)

context = get_ssl_context("server.crt", "server.key")
httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

httpd.serve_forever()
