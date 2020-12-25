import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

var CognitoUserPoolId = 'us-east-2_BnvwmVnUb';
var CognitoClienId = '5fk8kjts1ablau772j03b1ip9b';

class Auth {
    Login(user, pass) {
        var authenticationData = {
            Username : user,
            Password : pass,
        };
        
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
        var poolData = { 
            UserPoolId : CognitoUserPoolId,
            ClientId : CognitoClienId
        };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        var userData = {
            Username : user,
            Pool : userPool
        };
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                var accessToken = result.getAccessToken().getJwtToken();
        
                /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
                var idToken = result.idToken.jwtToken;

                alert('Login Success');
            },        
            onFailure: function(err) {                
                alert(err);
            },        
        });
    }
}

export default Auth;