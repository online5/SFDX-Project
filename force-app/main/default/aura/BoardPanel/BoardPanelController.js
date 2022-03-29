({
    myAction : function(component, event, helper) {

        let comboBox = component.find("comboxBox");
        let gameModeValue = comboBox.get("v.value");
        console.log("Game Mode selected is: "+gameModeValue);
        component.set('v.selectedOptionValue', gameModeValue);
        let selectOption = component.get("v.selectedOptionValue");
        
        // if the option was already selected then we need to start a new game
        if(selectOption)
        {
            let comp = component.find("boardComp");
            comp.resetTheBoard();
        }
    }
    ,
    reShuffler : function(component, event, helper) {
        
    }
})