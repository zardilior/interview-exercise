export default {
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "minLength":1
    },
    "lastName": {
      "type": "string",
      "minLength":1
    },
    "companyName": {
      "type": "string",
      "minLength":1
    },
    "workEmail": {
      "type": "string",
      "format": "email",
      "minLength":1
    },
    "phoneNumber": {
      "type": "string",
      "pattern":"^([0-9][ \\-,\\(\\)]*){10}$",
      "minLength":1,
    },
    "message": {
      "type": "string",
      "minLength":1
    },
    "newsletter": {
      "type": "boolean"
    }
  },
  "required": [
    "firstName",
    "lastName",
    "companyName",
    "workEmail",
    "phoneNumber",
    "message",
    "newsletter"
  ]
}
