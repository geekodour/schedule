// import { error, type Load } from '@sveltejs/kit';

// // Fetch events from Google Calendar API
// async function fetchEvents() {
//   const response = await fetch(
//     'https://www.googleapis.com/calendar/v3/calendars/{YOUR_PUBLIC_CALENDAR_ID}/events?key={YOUR_API_KEY}'
//   );
//   const data = await response.json();
//   return data.items;
// }

// export const load: Load = async ({ fetch }) => {
// 	try {
// 		// const client: PromiseClient<typeof MatchService> = newConnectClient({fetch: fetch}, MatchService)
// 		// let req = new ListMatchesRequest();
// 		// let res = await client.listMatches(req);

// 		// // need to convert all Timestamp/@bufbuild/protobuf to Javascript Date
// 		// const newData = res.data.map(m=>({
// 		// 	...m,
// 		// 	startTime: m.startTime?.toDate(),
// 		// 	endTime: m.endTime?.toDate(),
// 		// }))
// 		//


// 		const response = await fetch(
// 			'https://www.googleapis.com/calendar/v3/calendars/{YOUR_PUBLIC_CALENDAR_ID}/events?key={YOUR_API_KEY}'
// 		);
// 		const data = await response.json();

// 		return {
// 			matches: newData.sort((a,b)=>{
// 				return a.name.localeCompare(b.name)
// 			})
// 		};
// 	} catch (e) {
// 		error(404, 'Not found');
// 	}
// };
