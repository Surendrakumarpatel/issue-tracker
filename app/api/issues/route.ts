import { connect } from "@/database/database";
import Issue from "@/models/issueModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { title, description } = body;
        if (!title || !description)
            return NextResponse.json({ message: "All fields are required" }, { status: 400 }); //400 means client sent invalid data
        const issue = await Issue.create({
            title,
            description
        })
        return NextResponse.json({ message: "Issue created successfull", issue }, { status: 201 }
        )
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}