import websocket

stateData = ""

class GameClient(url):
		output = ""
		
	def connect():
		if ("WebSocket" in window):
			self.ws = websocket.WebSocket()
			self.ws.connect(url)

			self.websocket.onopen = self.onOpen
			self.websocket.onclose = self.onClose
			self.websocket.onmessage = self.onMessage
			self.websocket.onerror = self.onError
		else:
			print ("web sockets not supported on this browser")
	def message(evt):
		stateData = evt.data
		getMessage(evt.data)
		
	def error(evt):
		return "Error: " + evt.data
	
	def sendMsg(key,value):
		message = key + "|" + value
		self.ws.send(message)
	
	def close():
		self.ws.close()
	
	self.connect = connect()
	self.onMessage = message(evt)
	self.onError = error(evt)
	self.sendMessage = sendMsg(key,value)
	self.onClose = close()
  

"""
	  
    self.getState = function(searchKey):
      # given a message and key, returns the status
      # string associated with that key
       
      result = "element not found"
      messageList = stateData.split("\n")
      for (i in messageList):
        line = messageList[i].split("|")
		key = line[0]
		value = line[1]
		if(searchKey == key):
			result = value.trim()
      return result;

    self.getKeys = def(message):
      #given the message, returns a list of keys
      keyArray = []
      messageList = stateData.split("\n")
      for (i in messageList):
        line = messageList[i].split("|")
		key = line[0]
		#don't push null keys
		if (key != ""):
			keyArray.push(key)
      return keyArray

  self.sendSprite = def(key, sprite):
    # extract information from the sprite and send
    # a message to the server in the format
    # key|image, x, y, width, height, dir
    message = "";
    message += sprite.image.src + ","
    message += sprite.x + ","
    message += sprite.y + ","
    message += sprite.width + ","
    message += sprite.height + ","
    message += sprite.getImgAngle()
    self.sendMessage(key, message)

  self.updateRemoteSprite = def(key, sprite):
    message = self.getState(key)
    if (message == "element not found"):
		print("can't find element: " + key)
    else:
      msgArray = message.split(",")
      sprite.setImage(msgArray[0])
      sprite.setX(parseInt(msgArray[1]))
      sprite.setY(parseInt(msgArray[2]))
      sprite.width = parseInt(msgArray[3])
      sprite.height = parseInt(msgArray[4])
      sprite.setImgAngle(parseInt(msgArray[5]))


def getMessage(text):
  #do nothing. Overwrite in local client
"""