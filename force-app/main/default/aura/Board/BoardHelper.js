({
    getWords: function (count) {
        if (count > 100) return;
        // build an array
        let wordsArray = [
            "main","form","chest","receive","box","light",
            "summer","pretty","including","college","uncle","gasoline",
            "here","husband","halfway","skill","earn","difference",
            "elephant","brain","mainly","rough","flame","sound",
            "wonder","dozen","solar","truck","buried","opinion",
            "article","health","saddle","chest","herself","except",
            "led","gone","right","setting","deeply","gone",
            "twelve","church","disappear","muscle","harder","family",
            "bean","wherever","liquid","skin","excitement","shinning",
            "business","till","measure","rod","author","pool",
            "carbon","one","brought","darkness","cap","farther",
            "sky","kept","fun","pleasant","grown","ourselves",
            "particularly","dozen","blanket","indeed","serve","win",
            "we","library","queen","proud","glad","iron",
            "single","post","show","fifteen","which","simple",
            "hearing","promised","according","some","bell","press",
            "silence","labor","prove","broad","sea","any",
            "purple","choose","hung","grabbed","continent","local",
            "age","mouse","carry","doing","globe","dog",
            "journey","fun","solution","twelve","plane","company",
            "happily","journey","climb","thou","film","blood",
            "habit","production","offer","muscle","accept","dinner",
            "wheat","toward","sit","mother","art","lead",
            "brave","lose","introduced","occur","previous","bell",
            "available","exclaimed","mood","cannot","center","drove",
            "character","capital","hollow","teacher","floating","contrast",
            "stood","definition","plenty","goes","parallel","express",
            "cow","ate","goose","planet","report","industry",
            "than","safety","climb","weak","lake","beside",
            "greatest","building","drove","hand","are","vertical",
            "cry","worry","solar","mile","nearly","buried",
            "magic","elephant","mountain","average","mark","huge",
            "telephone","since","far","drink","division","leader",
            "vowel","read","tongue","hospital","coast","spread",
            "president","satellites","upon","put","solve","along",
            "minute","capital","design","speak","old","sense",
            "layers","expect","fell","half","brick","shorter",
            "mixture","paper","load","unless","while","soap",
            "film","grandfather","beginning","equally","empty","bigger",
            "clear","row","feathers","color","syllable","exchange",
            "put","badly","held","clothing","ago","disappear",
            "steel","represent","metal","equally","could","wife",
            "court","spirit","young","enough","fruit","natural",
            "storm","fully","getting","there","tool","married",
            "birth","greatest","year","pipe","occur","fifty",
            "jump","death","night","lesson","trunk","cost",
            "object","enter","actual","ball","teach","complex",
            "team","before","vessels","giant","science","flies",
            "noted","remain","warn","model","neighbor","mental",
            "species","satisfied","next","lower","circle","environment",
            "shout","take","do","fear","tip","jungle",
            "ordinary","empty","smell","military","wait","had",
            "across","accurate","anybody","tin","road","cream",
            "fight","subject","serve","will","quarter","vowel",
            "likely","try","easily","form","plural","root",
            "taught","both","fox","been","folks","factory",
            "cook","atomic","cannot","born","copy","tired",
            "soon","straw","heard","complex","firm","too",
            "develop","circle","closer","even","today","express",
            "happily","slope","eleven","than","replied","thee",
            "salmon","examine","hand","officer","tongue","century",
            "provide","but","supply","exciting","shadow","allow",
            "radio","partly","fighting","image","life","eleven",
            "boat","master","fall","if","how","former",
            "born","anyone","hunt","broke","riding","duty",
            "stared","topic","explain","birthday","further","hospital",
            "unit","main","mad","angle","arm","studying",
            "touch","hay","close","make","month","heading",
            "society","meat","plane","century","visitor","roar",
            "pick","scene","attached","studying","unit","kill",
            "piano","crowd","sound","hardly","indicate","stop",
            "edge","population","some","copy","border","bigger",
            "dull","thick","storm","stay","write","port",
            "skill","underline","fairly","aloud","goose","grass",
            "cloud","room","earth","speech","gift","natural",
            "red","notice","machinery","nice","question","national",
            "wish","courage","amount","thirty","hurt","composed",
            "speech","have","swung","volume","origin","leaf",
            "thank","stretch","writer","greatest","naturally","pull",
            "cotton","met","fast","done","base","lonely",
            "opinion","numeral","strength","swung","broken","wild",
            "equal","step","plate","missing","pond","making",
            "would","supply","pan","range","definition","interior",
            "strong","grandmother","children","system","addition","language",
            "joined","board","introduced","afraid","you","harbor",
            "stems","handle","airplane","grass","jungle","fireplace",
            "change","firm","worker","setting","afraid","command",
            "press","stone","negative","buy","bare","broken",
            "concerned","electric","inch","taste","studying","crack",
            "give","partly","basic","property","highway","sometime",
            "would","sang","wrong","surrounded","pitch","apart",
            "especially","corn","becoming","cause","away","each",
            "unknown","if","post","lovely","pine","wave",
            "mark","policeman","bread","yard","vowel","keep",
            "kitchen","behind","greatest","greater","bark","tree",
            "improve","reach","throat","sold","had","popular",
            "flag","steady","gasoline","angle","claws","strength",
            "roar","chapter","touch","tongue","movie","poor",
            "waste","bee","entire","test","queen","possibly",
            "rising","step","success","seen","bottom","hurried",
            "expect","nuts","dot","growth","ask","easier"
        ];
        // Randomize the words array
        wordsArray = this.randomizeArray(wordsArray);
        // return requested words
        return wordsArray.slice(0, count);
    },

    randomizeArray: function (arr) {
        const randomArr = arr;
        // Randomize the array
        for (let i = randomArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = randomArr[i];
            randomArr[i] = randomArr[j];
            randomArr[j] = temp;
        }
        return randomArr;
    },

    getRandomName: function(arr)
    {
        const randomArrayIndex = Math.floor(Math.random() * arr.length);
        return arr[randomArrayIndex];

    },

    disableBoard: function(component)
    {
        component.set("v.boardDisabled", true);
        component.set("v.isBoardReset", false);
    },

    enableBoard: function(component)
    {
        component.set("v.boardDisabled", false);
    },

    resetBoard: function(component)
    {
        this.enableBoard(component);
        //reset the clickCount Value
        component.set("v.clickCount", 0);
        //reset the result message
        component.set("v.result", "");
        //set the board reset flag to true
        component.set("v.isBoardReset", true);
    }
});

