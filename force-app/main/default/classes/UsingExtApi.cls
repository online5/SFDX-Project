public class UsingExtApi {
    
    public static String userId;
    public static String addUser()
    {
        Integer testNum = Integer.valueOf((Math.random()*100));
        String name = 'TestUser'+testNum;
        //{"name":'+"Taarak Mehta","email":"_abc_deg_@gmail.com","gender":"Male","status":"active"}
        String body='{"name":"'+name+'","email":"'+name+'@gmail.com","gender":"Male","status":"active"}';
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://gorest.co.in/public/v2/users');
        request.setMethod('POST');
        request.setBody(body);
        request.setHeader('Content-Type', 'application/json');
        request.setHeader('Authorization', 'Bearer 07f7ae4e4eedb75a0e3f12c200d2b3d727d8d0bc259b0e671ac050e8dade52e9');
        
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        System.debug(response.getStatus());
        System.debug(response.getStatusCode());
        
        if(response.getStatusCode() == 201) {
            Object obj = (Object)JSON.deserializeUntyped(response.getBody());            
            Map<String, Object> nmap = (Map<String, Object>)obj;
            System.debug(nmap.get('id')+' '+nmap.get('name')); 
            return String.valueOf(nmap.get('id'));
        }
        return null;
        
    }
    
    public static void getUserById(String userId)
    {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        String endPoint = 'https://gorest.co.in/public/v2/users'+'/'+userId;
        System.debug(endPoint);
        request.setEndpoint(endPoint);
        request.setMethod('GET');
        request.setHeader('Authorization', 'Bearer 07f7ae4e4eedb75a0e3f12c200d2b3d727d8d0bc259b0e671ac050e8dade52e9');
        
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        System.debug(response.getStatus());
        System.debug(response.getStatusCode());
        if(response.getStatusCode() == 200) {
            System.debug(response.getBody());      
        }
        
    }
    public static void getUsers()
    {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://gorest.co.in/public/v2/users');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
            List<Object> fieldList = (List<Object>)JSON.deserializeUntyped(response.getBody()); 
            for(Object fld : fieldList){     
                Map<String,Object> data = (Map<String,Object>)fld; 
                system.debug('Id: '+data.get('id')+' Name: '+data.get('name')); 
            }
            
        }
    }
    
    
}