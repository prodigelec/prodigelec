const { supabase } = require("./backend/config/supabase");

async function testDB() {
  console.log("--- DB Connectivity Test ---");
  try {
    const { data: customers, error: custError } = await supabase
      .from("customers")
      .select("count")
      .limit(1);
    if (custError) console.error("Customers Table Error:", custError.message);
    else console.log("Customers Table: OK");

    const { data: quotes, error: quoteError } = await supabase
      .from("quotes")
      .select("count")
      .limit(1);
    if (quoteError) console.error("Quotes Table Error:", quoteError.message);
    else console.log("Quotes Table: OK");

    const { data: joinTest, error: joinError } = await supabase
      .from("quotes")
      .select("id, customers(id)")
      .limit(1);
    if (joinError)
      console.error("Join Error (Quotes -> Customers):", joinError.message);
    else console.log("Join (Quotes -> Customers): OK");
  } catch (e) {
    console.error("Terminal Error:", e.message);
  }
}

testDB();
