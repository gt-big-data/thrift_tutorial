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

class SaveMessageServiceImplementation(object):

    def __init__(self):
        self.log = []

    def save(self, message):
        self.log.append(message)
        print message
        thrift.insert_one({
            'timestamp': message.timestamp,
            'user': message.user,
            'text': message.text,
            'share': message.share
        })
        print 'message saved.......'


if __name__ == '__main__':
    handler = SaveMessageServiceImplementation()
    processor = SaveMessageService.Processor(handler)
    transport = TSocket.TServerSocket(port=9090)
    tfactory = TTransport.TBufferedTransportFactory()
    pfactory = TBinaryProtocol.TBinaryProtocolFactory()
    server = TServer.TSimpleServer(processor, transport, tfactory, pfactory)
    print('Starting python SaveMessageServiceImplementation')
    server.serve()
