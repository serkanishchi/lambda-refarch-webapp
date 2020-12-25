// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4fhohcb37cfm2pe6b7obkk5n7s",     // CognitoClientID
  "api_base_url": "https://zpyig8gvz5.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-sam-todo-app.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d2l6gegmdkjkfr.amplifyapp.com"                                      // AmplifyURL
};

export default config;
