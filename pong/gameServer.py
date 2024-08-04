from SimpleWebSocketServer import SimpleWebSocketServer, WebSocket

clients = []
clientData = {}

class SimpleChat(WebSocket):

	def getClientData( str ):
		print "5"
		if (str == "html") :
			endl = "<br />"
		else:
			endl = "\n"
		
		for i in clientData:
			output += i + "|" + clientData[i] + endl
		return output

	def handleMessage(self):
		print "received: " + self.data	
		temp = self.data.split("|")
		key = temp[0]
		value = temp[1]
		clientData[key] = value
		output = ""
		output += "current data:\n"
		for i in clientData:
			output += str(i) + "|" + clientData[i] + "\n"
		for client in clients:
			print output
			client.sendMessage(self.address[0] + u' - ' + self.data + output)
			
	def handleConnected(self):
		print self.address, 'connected'
		for client in clients:
			client.sendMessage(self.address[0] + u' - connected')
		clients.append(self)

	def handleClose(self):
		clients.remove(self)
		print self.address, 'closed'
		for client in clients:
			client.sendMessage(self.address[0] + u' - disconnected')
			

server = SimpleWebSocketServer('', 8001, SimpleChat)
server.serveforever()
