# Crowdsourcing with real-time data quality control
Data quality and interagency remain significant hurdles in efficient crowdsourcing to this date. Efforts to improve data quality  (i.e., selecting a suitable worker pool, detailed task design at a granular level, reputation, and credentials (e.g., education, approval rate)). Data quality control can be implemented after data collection, i.e., rigorous attention checks, setting quality thresholds for text data, and some generic text cleanup, expert review (domain expert assesses the data quality), majority consensus, and contributor evaluation. The aforementioned technique covers pre-quality control and post-quality control. This code will help you to implement realtime quality control during crowdsourcing text data.

## Prerequisites

- [Google Custom Search API Key](https://developers.google.com/custom-search/docs/tutorial/creatingcse) (Replace `XYZ` with your actual API key).
- [Custom Search Engine ID](https://developers.google.com/custom-search/docs/tutorial/creatingcse) (Replace `abc234XTYG` with your actual engine ID).

## Installation

There is no installation required for this HTML code. 
- For AMT: Simply include the code in your HTML project or HIT (Human Intelligence Task) template.
- [For Qualtrics](https://www.qualtrics.com/support/survey-platform/survey-module/question-options/add-javascript/) Simply add the code from Qualtrics Implementation in your desired question. 

## Usage

This HTML (embedded with JS script) code is designed to be used as part of an Amazon Mechanical Turk (AMT) HIT (Human Intelligence Task) for open-ended questions. It performs the following tasks:

- Allows workers to submit text responses.
- Performs a Google Custom Search using the worker's response.
- Checks for incohesive or copy-paste text from the internet.
- Provides feedback to the worker based on the search results.
- Track the user's number of attempts before a successful submission for any post-hoc analysis.

To use this code:
1. Include the code in your HIT template.
2. Set up the Google Custom Search API Key and Custom Search Engine ID.
3. Customize the code to fit your specific HIT requirements.

## Contributing

Contributions are welcome! If you have any improvements or suggestions for this code, please feel free to open an issue or create a pull request.

## License

This code is provided under the [MIT License](LICENSE).

## Acknowledgments

This code was created with the help of the following libraries and resources:

- [crowd-html-elements.js](https://assets.crowd.aws/crowd-html-elements.js)
- [crowd-client.js](https://assets.crowd.aws/crowd-client.js)
- [jQuery](https://jquery.com/)
- [Bootstrap](https://getbootstrap.com/)

## Contact

For questions or feedback regarding this code, please contact:

- Prosanta Barai
- prosantabarai@arizona.edu

