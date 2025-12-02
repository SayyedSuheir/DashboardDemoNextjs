import connectDB from "@/lib/mongodb";
import Users from "@/models/users";

// GET a single user by ID
export async function GET(req, { params }) {
  try {
    await connectDB();

    const id = Number(params.id);
    if (isNaN(id)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid ID" }),
        { status: 400 }
      );
    }

    const user = await Users.findOne({ id });
    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify({ success: true, user }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

// UPDATE a single user by ID
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const id = Number(params.id);
    if (isNaN(id)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid ID" }),
        { status: 400 }
      );
    }

    const body = await req.json();

    const updatedUser = await Users.findOneAndUpdate({ id }, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify({ success: true, user: updatedUser }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

// DELETE a single user by ID
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const id = Number(params.id);
    if (isNaN(id)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid ID" }),
        { status: 400 }
      );
    }

    const deletedUser = await Users.findOneAndDelete({ id });
    if (!deletedUser) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "User deleted" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
