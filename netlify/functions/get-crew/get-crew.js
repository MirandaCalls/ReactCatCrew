const querystring = require("querystring");
const axios = require("axios").default;

const handler = async (event) => {
  try {
    let params = {
      view: "Grid view",
    };

    const onlyShowOnDuty = event.queryStringParameters.onlyShowOnDuty || false;
    console.log(onlyShowOnDuty);
    if (onlyShowOnDuty) {
      params.filterByFormula = 'Status = "On Duty"';
    }

    const response = await axios.get(
      `https://api.airtable.com/v0/appdP6n26nxymOzG1/Crew%20List?` +
        querystring.stringify(params),
      { headers: { Authorization: "Bearer " + process.env.AIRTABLE_API_TOKEN } }
    );

    var crew = [];
    for (var officer of response.data.records) {
      crew.push({
        id: officer.id,
        name: officer.fields.Name,
        division: officer.fields.Division,
        status: officer.fields.Status,
        dateRecruited: officer.fields["Date Recruited"],
        origin: officer.fields.Origin,
        images: {
          portrait: officer.fields.Image[0].url,
          thumbnail: officer.fields.Image[0].thumbnails.small.url,
        },
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify(crew),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
