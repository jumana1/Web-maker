const mongoose = require("mongoose");
const WidgetSchema = require
("./widget.schema.server")
let WebsiteModel = mongoose.model
("WebsiteModel", WebsiteSchema);

WidgetModel.createWidget =
createWidget
WidgetModel.findAllWidgetsForPage =
findAllWidgetsForPage
WidgetModel.findWidgetById =
findWidgetById
WidgetModel.updateWidget =
updateWidget
WidgetModel.deleteWidget =
deleteWidget

function createWidget(widget) {
    return WidgetModel.createWidget(widget);
}

function findAllWidgetsForPage(pid) {
    return WidgetModel.findAllWidgetsForPage(pid);
}
function findWidgetById(wgid) {
    return WidgetModel.findWidgetById(wgid);
}

function updateWidget(wgid, widget) {
    return WidgetModel.update({ _id: wgid }
        widget);
}

function deleteWidget(wgid) {
    return WidgetModel.remove({ _id: wgid});
}

module.exports = WidgetModel;