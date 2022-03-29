({
    blockClickHandler : function(component, event, helper) {
        const flag = component.get("v.open");
        if(flag === false)
        {
            component.set("v.open", true);
            let word = component.get("v.gameWord");
            console.log("Word inside block click handler is: "+word);
            
            var cmpEvent = component.getEvent("blkEvent");
            cmpEvent.setParam("message",word);

            console.log("Parameter set in blockclick handler: "+cmpEvent.getParam("message"));
            cmpEvent.fire();   
        }

    }
})
