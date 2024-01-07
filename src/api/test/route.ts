// "use server";

// import connect from "~/utils/db";
// import user from "@/server/testmodel";

// export const GET = async (req: Request) => {
//   try {
//     await connect();
//     // const requ = await req.json();
//     // console.log(requ);
//     const body = await user.find();
//     console.log(body);
//     return Response.json(body);
//   } catch (error) {
//     console.log(error);
//     throw error;
//     return Response.error();
//   }
// };

// export const POST = async (req: Request) => {
//   try {
//     await connect();
//     const body = await req.json();
//     console.log(body);
//     const done = await user.create(body);
//     console.log(done);
//     return Response.json(done);
//   } catch (error) {
//     console.log(error);
//     throw error;
//     return Response.error(error);
//   }
// };
