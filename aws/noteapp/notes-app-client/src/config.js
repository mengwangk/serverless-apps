const dev = {
  STRIPE_KEY: "pk_test_YlEirw0TBW5TNsZuF3emRlyI00swgdFRO3",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-vue8qvmeh2ns",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://i1wwsombea.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_q4vO6iNcR",
    APP_CLIENT_ID: "2v37jmm9l6gftnn5l03k4qem8o",
    IDENTITY_POOL_ID: "us-east-1:9bb691c3-39f6-4efd-9d70-9ad9747b5a7c",
  },
};

const prod = {
  STRIPE_KEY: "pk_test_YlEirw0TBW5TNsZuF3emRlyI00swgdFRO3",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-7z2pdgglizsz",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://x26fi12o31.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_H1Qgaz5Ae",
    APP_CLIENT_ID: "2nlm2u3h0si9edkoe73pbki4io",
    IDENTITY_POOL_ID: "us-east-1:a73e4ba5-8c8e-4d34-8888-b582ab292db5",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
