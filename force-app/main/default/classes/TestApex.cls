public class TestApex {
    
    
    public static void printString()
    {
        String s = 'Deepak';
        System.debug('Before Calling method: '+s);
        TriggerStaticClass.changeStringData(s);
        System.debug('After Calling Method: '+S);
    }
    public static void printSet()
    {
        Set<Integer> integerSet = new Set<Integer>{1, 2, 5};
            
        System.debug('Set Before calling method: '+ integerSet);
        
        TriggerStaticClass.AddDataToSet(integerSet);
        
        System.debug('Set After calling method: '+ integerSet);
        
    }
    
}