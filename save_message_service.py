from gen_py.tutorial import SaveMessageService
from gen_py.tutorial import ttypes

from thrift.transport import TSocket
from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol
from thrift.server import TServer

import pymongo

client = pymongo.MongoClient('mongodb://db.retinanews.net')
db = client.big_data
thrift = db.thrift

def main():
    return

if __name__ == '__main__':
    main()
