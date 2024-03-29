(function () {
	var DOM = fl.getDocumentDOM()
	if(DOM === null){
		return alert("Откройте файл!")
		}
	
	fl.runScript(fl.configURI + "Plugin Package/Library/nodeJSFL.jsfl");
	var tempURL = nodeJSFL.FLfile.tempURL()

	if (DOM.getTimeline().getSelectedLayers().length === 0) {
		return alert("Выберите хотя бы один слой!")
	}
	if(!tempURL){
		return alert("Я не нашел папку temp на вашем компьютере!")
		}

	DOM.getTimeline().copyLayers();
	fl.createDocument();

	var copiDOM = fl.documents[fl.documents.length - 1]
	var timeline = copiDOM.getTimeline()
	timeline.pasteLayers();

	timeline.deleteLayer(timeline.layers.length - 1);

	
	fl.runScript(fl.configURI + "Plugin Package/Library/nodeJSFL.jsfl");
	var tempURL = nodeJSFL.FLfile.tempURL()
	FLfile.createFolder(tempURL +"/fhghhutuiumnyoiuo789hh")	
	fl.saveDocument(copiDOM, tempURL +"/fhghhutuiumnyoiuo789hh/CopyLayers.fla")

	copiDOM.close();
})()
