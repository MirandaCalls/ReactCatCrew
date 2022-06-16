const querystring = require("querystring");
const axios = require("axios").default;

const handler = async (event) => {
  try {
    let params = {
      view: "Grid view",
    };

    let formulas = [];
    const onlyShowOnDuty =
      event.queryStringParameters.onlyShowOnDuty || "false";
    if (onlyShowOnDuty == "true") {
      formulas.push('Status = "On Duty"');
    }

    const search = event.queryStringParameters.search;
    if (search) {
      formulas.push('SEARCH("' + search + '",{Crew Number})');
    }

    if (formulas.length == 2) {
      params.filterByFormula = `AND(${formulas[0]},${formulas[1]})`;
    } else if (formulas.length == 1) {
      params.filterByFormula = formulas[0];
    }

    const response = await axios.get(
      process.env.AIRTABLE_APP_URL +
        "/Crew%20List?" +
        querystring.stringify(params),
      { headers: { Authorization: "Bearer " + process.env.AIRTABLE_API_TOKEN } }
    );

    var crew = [];
    for (var officer of response.data.records) {
      crew.push({
        id: officer.id,
        name: officer.fields.Name,
        crewNumber: officer.fields["Crew Number"],
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
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
