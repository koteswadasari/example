Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");Sys.Extended.UI.HTMLEditor.ToolbarButton.OkCancelPopupButton=function(a){Sys.Extended.UI.HTMLEditor.ToolbarButton.OkCancelPopupButton.initializeBase(this,[a])};Sys.Extended.UI.HTMLEditor.ToolbarButton.OkCancelPopupButton.prototype={set_activeEditPanel:function(c){var a=this;if(a._editPanel!=c&&a._editPanel!=null){var b=a.get_relatedPopup();if(typeof b._forceImClose=="function"){var d=b._forceImClose;d(b._iframe.contentWindow)}}Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModePopupImageButton.callBaseMethod(a,"set_activeEditPanel",[c])},callMethod:function(){var a=this;if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.OkCancelPopupButton.callBaseMethod(a,"callMethod"))return false;a.openPopup(Function.createDelegate(a,a._onopened));return true},_onopened:function(b){var a=this;b.popupMediator.set_callMethodByName("OK",Function.createDelegate(a,a._onOK));b.popupMediator.set_callMethodByName("Cancel",Function.createDelegate(a,a._onCancel));var c=a.get_relatedPopup();c._popup=a._designPanel._popup;c._forceImClose=Function.createDelegate(a,a._onCancel);a._designPanel._popup=a.get_relatedPopup();a.opened(b)},opened:function(){},_onOK:function(b){var a=this;a.okCheck(b)&&a._exit(Function.createDelegate(a,a.ok),b)},_onCancel:function(b){var a=this;a.cancelCheck(b)&&a._exit(Function.createDelegate(a,a.cancel),b)},_exit:function(c,b){var a=this;a.closePopup();a._designPanel._popup=a.get_relatedPopup()._popup;a.get_relatedPopup()._popup=null;a.get_relatedPopup()._forceImClose=null;c(b)},ok:function(){},cancel:function(){},okCheck:function(){return true},cancelCheck:function(){return true}};Sys.Extended.UI.HTMLEditor.ToolbarButton.OkCancelPopupButton.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.OkCancelPopupButton",Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModePopupImageButton);