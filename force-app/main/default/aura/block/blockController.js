({
    doInit :function(component, event, helper) {
        console.log("Inside the Block doinit function");
        component.set("v.open", false);
    },
   
    blockClickHandler : function(component, event, helper) {
        var flag = component.get("v.open");
        console.log("Flag Value: "+flag);
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
        else
        {
            component.set("v.open", false);
        }


    },

    scriptsLoaded: function (component, event, helper) {
        const element = component.getElement(".board-block");
        fitText(element);
        
    },

    resetWordStatus :  function (component, event, helper) {
    
    }

    
})
