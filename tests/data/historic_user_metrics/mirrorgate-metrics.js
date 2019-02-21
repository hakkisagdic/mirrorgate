
var now = new Date();
var startOfMinute = parseInt((new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes())).getTime());
var startOfHour = parseInt((new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours())).getTime());
var startOfDay = parseInt((new Date(now.getFullYear(), now.getMonth(), now.getDate())).getTime());

db.getCollection('historic_user_metrics').insertMany([
  {
    "viewId" : "AWS/1234123/alb",
    "identifier": "AWS/1234123/alb2AWSavalabilityRatecollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "availabilityRate",
    "value" : 99.99,
    "sampleSize": 1,
    "timestamp" : startOfMinute,
    "collectorId" : "collector1",
    "historicType" : "MINUTES"
  },
  {
    "viewId" : "AWS/1234123/alb",
    "identifier": "AWS/1234123/alb2AWSavalabilityRatecollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "availabilityRate",
    "value" : 99.99,
    "sampleSize": 1,
    "timestamp" : startOfHour,
    "collectorId" : "collector1",
    "historicType" : "HOURS"
  },
  {
    "viewId" : "AWS/1234123/alb",
    "identifier": "AWS/1234123/alb2AWSavalabilityRatecollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "availabilityRate",
    "value" : 99.99,
    "sampleSize": 1,
    "timestamp" : startOfDay,
    "collectorId" : "collector1",
    "historicType" : "DAYS"
  },
  {
    "viewId" : "AWS/1234123/elb",
    "identifier": "AWS/1234123/elb2AWSavalabilityRatecollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "availabilityRate",
    "value" : 50.99,
    "sampleSize": 1,
    "timestamp" : startOfMinute,
    "collectorId" : "collector1",
    "historicType" : "MINUTES"
  },
  {
    "viewId" : "AWS/1234123/elb",
    "identifier": "AWS/1234123/elb2AWSavalabilityRatecollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "availabilityRate",
    "value" : 50.99,
    "sampleSize": 1,
    "timestamp" : startOfHour,
    "collectorId" : "collector1",
    "historicType" : "HOURS"
  },
  {
    "viewId" : "AWS/1234123/elb",
    "identifier": "AWS/1234123/elb2AWSavalabilityRatecollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "availabilityRate",
    "value" : 50.99,
    "sampleSize": 1,
    "timestamp" : startOfDay,
    "collectorId" : "collector1",
    "historicType" : "DAYS"
  },
  {
    "viewId" : "AWS/1234123/alb",
    "identifier": "AWS/1234123/alb2AWSresponseTimecollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "responseTime",
    "value" : 1.2,
    "sampleSize": 1,
    "timestamp" : startOfMinute,
    "collectorId" : "collector1",
    "historicType" : "MINUTES"
  },
  {
    "viewId" : "AWS/1234123/alb",
    "identifier": "AWS/1234123/alb2AWSresponseTimecollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "responseTime",
    "value" : 1.2,
    "sampleSize": 1,
    "timestamp" : startOfHour,
    "collectorId" : "collector1",
    "historicType" : "HOURS"
  },
  {
    "viewId" : "AWS/1234123/alb",
    "identifier": "AWS/1234123/alb2AWSresponseTimecollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "responseTime",
    "value" : 1.2,
    "sampleSize": 1,
    "timestamp" : startOfDay,
    "collectorId" : "collector1",
    "historicType" : "DAYS"
  },
  {
    "viewId" : "AWS/1234123/elb",
    "identifier": "AWS/1234123/elb2AWSresponseTimecollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "responseTime",
    "value" : 0.4,
    "sampleSize": 1,
    "timestamp" : startOfMinute,
    "collectorId" : "collector1",
    "historicType" : "MINUTES"
  },
  {
    "viewId" : "AWS/1234123/elb",
    "identifier": "AWS/1234123/elb2AWSresponseTimecollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "responseTime",
    "value" : 0.4,
    "sampleSize": 1,
    "timestamp" : startOfHour,
    "collectorId" : "collector1",
    "historicType" : "HOURS"
  },
  {
    "viewId" : "AWS/1234123/elb",
    "identifier": "AWS/1234123/elb2AWSresponseTimecollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "responseTime",
    "value" : 0.4,
    "sampleSize": 1,
    "timestamp" : startOfDay,
    "collectorId" : "collector1",
    "historicType" : "DAYS"
  },
  {
    "viewId" : "AWS/1234123/alb",
    "identifier": "AWS/1234123/alb2AWSrequestsNumbercollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "requestsNumber",
    "value" : 12,
    "sampleSize": 1,
    "timestamp" : startOfMinute,
    "collectorId" : "collector1",
    "historicType" : "MINUTES"
  },
  {
    "viewId" : "AWS/1234123/alb",
    "identifier": "AWS/1234123/alb2AWSrequestsNumbercollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "requestsNumber",
    "value" : 12,
    "sampleSize": 1,
    "timestamp" : startOfHour,
    "collectorId" : "collector1",
    "historicType" : "HOURS"
  },
  {
    "viewId" : "AWS/1234123/alb",
    "identifier": "AWS/1234123/alb2AWSrequestsNumbercollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "requestsNumber",
    "value" : 12,
    "sampleSize": 1,
    "timestamp" : startOfDay,
    "collectorId" : "collector1",
    "historicType" : "DAYS"
  },
  {
    "viewId" : "AWS/1234123/elb",
    "identifier": "AWS/1234123/elb2AWSrequestsNumbercollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "requestsNumber",
    "value" : 350,
    "sampleSize": 1,
    "timestamp" : startOfMinute,
    "collectorId" : "collector1",
    "historicType" : "MINUTES"
  },
  {
    "viewId" : "AWS/1234123/elb",
    "identifier": "AWS/1234123/elb2AWSrequestsNumbercollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "requestsNumber",
    "value" : 350,
    "sampleSize": 1,
    "timestamp" : startOfHour,
    "collectorId" : "collector1",
    "historicType" : "HOURS"
  },
  {
    "viewId" : "AWS/1234123/elb",
    "identifier": "AWS/1234123/elb2AWSrequestsNumbercollector1",
    "appVersion" : "2",
    "platform" : "AWS",
    "name" : "requestsNumber",
    "value" : 350,
    "sampleSize": 1,
    "timestamp" : startOfDay,
    "collectorId" : "collector1",
    "historicType" : "DAYS"
  },
  {
    "viewId" : "AWS/1234123",
    "identifier" : "AWS/1234123nullAWSinfrastructureCostcollector1",
    "platform" : "AWS",
    "name" : "infrastructureCost",
    "value" : 300.30,
    "sampleSize" : 1,
    "timestamp" : startOfMinute,
    "collectorId" : "collector1",
    "historicType" : "MINUTES",
  },
  {
    "viewId" : "1234123",
    "identifier" : "AWS/1234123nullAWSinfrastructureCostcollector1",
    "platform" : "AWS",
    "name" : "infrastructureCost",
    "value" : 300.30,
    "sampleSize": 1,
    "timestamp" : startOfHour,
    "collectorId" : "collector1",
    "historicType" : "HOURS"
  },
  {
    "viewId" : "1234123",
    "identifier" : "AWS/1234123nullAWSinfrastructureCostcollector1",
    "platform" : "AWS",
    "name" : "infrastructureCost",
    "value" : 300.30,
    "sampleSize": 1,
    "timestamp" : startOfDay,
    "collectorId" : "collector1",
    "historicType" : "DAYS"
  }
]);
