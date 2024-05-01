## Getting Started

Install dependencies:
npm i

Run the app:
npm run dev

## Description of the project

While the API offers many opportunties for creative filtering, I chose to spend my
time focussing on more on the perfomance of the app and the general code quality
in favour of implementing a large number of API features, like filtering.

For this, I am using react-query to manage the fetched data. To easily browse the
potentially large number of results, I chose the useInfiteQuery hook in combination
with the infite-scroll component as it's both relatively easy to implement and
helps managing performance by only loading data when necessary and caching the results.
