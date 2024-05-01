import {connectDB} from "../../../../utils/connect";
import Offer from "../../../../models/offerModel";
import {NextResponse} from "next/server";

export const dynamic = 'force-dynamic';
export async function GET() {
    try {
        await connectDB()
        const offers = await Offer.find({ isPublic: true }, {})
        return NextResponse.json(offers)
    } catch (e) {
        console.log(e)
    }
}