module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!. Version 0.0.6",
        input: event,
      },
      null,
      2
    ),
  };
};
