public class TriggerStaticClass {
    public static void AddDataToSet(Set<Integer> setOfInteger)
    {
        setOfInteger.add(4);
        setOfInteger.add(6);
        setOfInteger.add(8);
    }
    
    public static void changeStringData(String data)
    {
        data='';
        System.debug('String Value Inside method: '+data);
    }

}