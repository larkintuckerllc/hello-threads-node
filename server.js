const grpc = require('@grpc/grpc-js');
const messages = require('./helloworld/helloworld_pb');
const services = require('./helloworld/helloworld_grpc_pb');

const sayHello = (call, callback) => {
  const reply = new messages.HelloReply();
  const name = call.request.getName();
  reply.setMessage(`Hello ${name}`);
  callback(null, reply);
}
  
server = new grpc.Server();
server.addService(services.GreeterService, { sayHello });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
});
