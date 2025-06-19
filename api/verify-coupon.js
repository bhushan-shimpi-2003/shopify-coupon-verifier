export default function handler(req, res) {
  // 🔐 Allow all origins for testing — change to a specific domain in production
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end(); // Respond to preflight requests
  }

  const { code } = req.query;

  const coupons = {
    Bhush: { name: "Bhushan", email: "bhushan@example.com" },
    2967: { name: "Manish Dalmia", email: "manish.dalmia@indiraedu.com", coupon: "MANISHDALMIA" },
    1705: { name: "Ravindra Sarje", email: "Director-admission@indiraedu.com", coupon: "RAVINDRASARJE" },
    3008: { name: "Priyashi Priya Yadav", email: "priyashi.yadav@indiraisbs.edu.in", coupon: "PRIYASHIPRIYAYADAV" },
    1817: { name: "Dr. Sachin Hapase", email: "sachin.hapase@indiraisbs.ac.in", coupon: "DRSACHINHAPASE" },
    2650: { name: "Sohel Javed Shaikh", email: "sohel.shaikh@indiraisbs.ac.in", coupon: "SOHELJAVEDSHAIKH" },
    2684: { name: "Abhinav Jha", email: "abhinav.jha@indiraiimp.edu.in", coupon: "ABHINAVJHA" },
    2634: { name: "Vishal Popat Pawar", email: "vishal.pawar@icacs.ac.in", coupon: "VISHALPOPATPAWAR" },
    2611: { name: "Avani Suresh Patel", email: "avani.patel@indiraiimp.edu.in", coupon: "AVANISURESHPATEL" },
    2577: { name: "Ms. Sweta Gour", email: "sweta.gour@indiraisbs.ac.in", coupon: "MSSWETAGOUR" },
    2683: { name: "Supriya Diwate", email: "supriya.diwate@indiraisbs.ac.in", coupon: "SUPRIYADIWATE" },
    2351: { name: "Nagalaxmi Erlapaty", email: "nagalaxmi.erlapaty@indiraisbs.ac.in", coupon: "NAGALAXMIERLAPATY" },
    2336: { name: "Neha Thakur", email: "neha.thakur@indiraisbs.ac.in", coupon: "NEHATHAKUR" },
    1757: { name: "Purva Yogesh Randive", email: "purva.randive@indiraisbs.ac.in", coupon: "PURVAYOGESHRANDIVE" },
    2084: { name: "Shital Pawar", email: "shital.pawar@indiraisbs.ac.in", coupon: "SHITALPAWAR" },
    2428: { name: "Sunita Barule", email: "sunita.barule@indiraisbs.ac.in", coupon: "SUNITABARULE" },
    2992: { name: "Shreyad Barai", email: "shreyad.barai@indiraisbs.ac.in", coupon: "SHREYADBARAI" },
    3022: { name: "Srushti Talwekar", email: "srushti.talwekar@iccs.ac.in", coupon: "SRUSHTITALWEKAR" },
    2994: { name: "Nitisha Ranit", email: "nitisha.ranit@iccs.ac.in", coupon: "NITISHARANIT" },
    3050: { name: "Meghal Gandhi", email: "meghal.gandhi@indiraiimp.edu.in", coupon: "MEGHALGANDHI" },
    2999: { name: "Shahin Tadvi", email: "shahin.tadvi@indiraiimp.edu.in", coupon: "SHAHINTADVI" },
    3043: { name: "Ragani Sonawane", email: "ragini.sonawane@indiraisbs.edu.in", coupon: "RAGANISONAWANE" },
    2857: { name: "Vaishnavi Bhagwat Godbole", email: "vaishnavi.godbole@icacs.ac.in", coupon: "VAISHNAVIBHAGWATGODBOL" },
    2991: { name: "Prajakta Telang", email: "prajakta.telang@indiraisbs.ac.in", coupon: "PRAJAKTATELANG" },
    2638: { name: "Trupti kakuste", email: "trupti.kakuste@indiraiimp.edu.in", coupon: "TRUPTIKAKUSTE" },
    2971: { name: "Tamanna Kalal", email: "tamannakalal@indiraicp.edu.in", coupon: "TAMANNAKALAL" },
    2679: { name: "Madhuri Pardeshi", email: "madhuri.pardeshi@indiraiimp.edu.in", coupon: "MADHURIPARDESHI" },
    2998: { name: "Prajwal Chauhan", email: "prajwal.chauhan@indiraiimp.edu.in", coupon: "PRAJWALCHAUHAN" },
    3030: { name: "Aarti Kamble", email: "Aarti.Kamble@indiraiimp.edu.in", coupon: "AARTIKAMBLE" },
    2913: { name: "Shashank Wani", email: "Shashank.wani@indiraicp.edu.in", coupon: "SHASHANKWANI" },
    1830: { name: "Kishor Gaikwad", email: "kishor.gaikwad@indiraisbs.ac.in", coupon: "KISHORGAIKWAD" },
    2716: { name: "Pankaj Bendale", email: "pankaj.bendale@indiraisbs.edu.in", coupon: "PANKAJBENDALE" },
    2386: { name: "Shubham Shahane", email: "shubham.shahane@icacs.ac.in", coupon: "SHUBHAMSHAHANE" },
    2360: { name: "Kavita Bhoite", email: "kavita@indiraedu.com", coupon: "KAVITABHOITE" },
    1959: { name: "Shubham Shingote", email: "shubham.shingote@indiraisc.edu.in", coupon: "SHUBHAMSHINGOTE" },
    2675: { name: "Vijaykumar Mali", email: "vijaykumar.mali@indiraisbs.edu.in", coupon: "VIJAYKUMARMALI" },
    2423: { name: "Yash Aryan", email: "yash.aryan@indiraedu.com", coupon: "YASHARYAN" },
    3031: { name: "Prerna Bhat", email: "prerna.bhat@indiraiimp.edu.in", coupon: "PRERNABHAT" },
    2997: { name: "Saumya Srivastava", email: "saumya.srivastava@indiraiimp.edu.in", coupon: "SAUMYASRIVASTAVA" },
    2264: { name: "Ishwar Malve", email: "ishwar.malve@indiraiimp.edu.in", coupon: "ISHWARMALVE" },
    2799: { name: "Rushikesh Jaju", email: "Rushikesh.jaju@indiraisbs.ac.in", coupon: "RUSHIKESHJAJU" },
    2439: { name: "Anand Ambekar", email: "anand.ambekar@indiraisc.edu.in", coupon: "ANANDAMBEKAR" },
    3011: { name: "Disha Ghai", email: "disha.ghai@indiraiimp.edu.in", coupon: "DISHAGHAI" },
    3010: { name: "Varun Soni", email: "varun.soni@indiraiimp.edu.in", coupon: "VARUNSONI" },
    INTERNEHA: { name: "Neha Shekhavat", email: "neha24.shekhawat@gmail.com", coupon: "NEHASHEKHAVAT" },
    INTERNLAKSH: { name: "Laksh Dhanani", email: "lakshdhanani26@gmail.com", coupon: "LAKSHDHANANI" }

  };

  if (coupons[code]) {
    return res.status(200).json({
      success: true,
      name: coupons[code].name,
      email: coupons[code].email,
    });
  } else {
    return res.status(404).json({
      success: false,
      message: "Invalid or expired coupon code",
    });
  }
}
