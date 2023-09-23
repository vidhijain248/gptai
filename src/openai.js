// // const { Configuration, OpenAIApi } = require('openai');

// import { Configuration, OpenAIApi } from 'openai'; // Replace 'openai' with the actual package name


// const configuration = new Configuration({
//     apiKey: "sdkjfjksdfkjsdfjksdfkj",
// });
// const openai = new OpenAIApi(configuration);

// export async function sendMsgToOpenAI(message) {
//     const res = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presense_penalty: 0
//     });
//     return res.data.choices[0].text
// }


// export default sendMsgToOpenAI;