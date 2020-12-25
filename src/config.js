const config = {
    s3: {
      REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
      BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME",
    },
    apiGateway: {
      REGION: "YOUR_API_GATEWAY_REGION",
      URL: "YOUR_API_GATEWAY_URL",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_BnvwmVnUb",
      APP_CLIENT_ID: "5fk8kjts1ablau772j03b1ip9b",
      IDENTITY_POOL_ID: "us-east-2_BnvwmVnUb",
    },
  };
  
  export default config;