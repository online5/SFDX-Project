({
    doinit: function(component, event, helper) {

        let gameMode = component.get("v.gameMode");
        let column=0
        if(gameMode && gameMode === "hard")
        {
            column = 6;
        }
        else if(gameMode === "medium")
        {
            column = 4;
        }
        else
        {
            column = 3;
        }
        let blockSize = 12/ column;
        component.set("v.blockSize", blockSize);
        const arr = helper.getWords(column * column);
        component.set("v.words", arr);
        component.set("v.winWord",helper.getRandomName(arr));
        
        //reseting the board
        helper.resetBoard(component);

    },
    blockClickEvent : function(component, event, helper) {
        let clickCount = component.get("v.clickCount") + 1;
        const message = event.getParam("message");
        let winWord = component.get("v.winWord");
        console.log("Inside blockClickEventHandler");
        console.log("Win word: "+winWord);
        console.log("Message: "+message);
        if(winWord === message)
        {
            console.log("You win!");
            helper.disableBoard(component);
            component.set("v.result", "You Win :)");
        }
        else if(clickCount === 3)
        {
            console.log("You lose !");
            helper.disableBoard(component);
            component.set("v.result", "You Lose :(");
        }
        component.set("v.clickCount", clickCount);

    }
})
