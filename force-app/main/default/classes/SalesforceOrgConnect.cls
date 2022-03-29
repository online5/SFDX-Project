public class SalesforceOrgConnect {
    
    
    public static void createCaseInOrgB()
    {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('callout:SalesforceNamedCredentials/services/apexrest/Cases');
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json');
        request.setBody('{"subject":"Case of Saleforce OrgA","status":"new","origin":"Web","priority":"Low"}');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
           System.debug('CaseId: '+response.getBody());
        }
    }
    public static void ConnectToOrgB()
    {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('callout:SalesforceNamedCredentials/services/apexrest/Cases');
        request.setMethod('GET');
        
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
           System.debug(response.getBody());
            Case obj = (Case)JSON.deserializeStrict(response.getBody(), Case.class);
            System.debug('Case Number: '+obj.CaseNumber+' -Case Subject: '+obj.Subject);
        }
    }
    
}