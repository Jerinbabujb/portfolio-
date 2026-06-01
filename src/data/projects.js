export const projects = [
  {
    id: 'unisoul',
    name: 'UNISOUL – NEURODIVERGENT DATING & SOCIAL APP',
    year: '2026', category: 'WEB PROJECT',
    image:"/unisoul.jpeg",
    description: 'A borderless matchmaking and social networking platform featuring vector-based pairing, biometric authentication, and synchronized real-time media sharing.',
    tags: ['React', 'Supabase','Prisma','WebSockets','Transformers', 'TAILWIND', 'NODEJS', 'EXPRESSJS', 'WEBSOCKET','JWT','CLOUDINARY'],
    status: 'ACTIVE PROJECT',
    vision: 'Bridge the gap in modern dating by creating a safe, highly verifiable, and deeply interactive environment tailored for neurodivergent connections—where users connect over synchronized experiences rather than just swipes.',
    fullDescription: `Built a complex, real-time ecosystem utilizing websockets for live interactions, machine learning for matching, and a responsive UI deployed across web, Electron desktop, and a React Native webview.`,
    features: [
      { title: 'Vector Matchmaking Engine', desc: 'Utilizes Xenova Transformers to generate embeddings, matching users via cosine similarity algorithms and pgvector.' },
      { title: 'Synchronized Media Rooms', desc: 'Public and private chat rooms featuring live-synced shared jukeboxes and video streams powered by WebSockets.' },
      { title: 'Real-Time Biometrics', desc: 'Integrates Face API for immediate, real-time selfie authentication during onboarding to ensure platform integrity.' },
      { title: 'Granular Privacy Controls', desc: 'Features social media visibility toggles, user blocking, and strict custom JWT protected routes.' },
    ],
    stack: ['React', 'Supabase','Prisma','WebSockets','Transformers', 'TAILWIND', 'NODEJS', 'EXPRESSJS', 'WEBSOCKET','JWT','CLOUDINARY'],
    stats: [],
    code: `// Core matching logic using Prisma and pgvector for cosine similarity
const findTopMatches = async (userEmbedding: number[]) => {
  const matches = await prisma.$queryRaw
    SELECT id, name, bio, 1 - (embedding <=> \${userEmbedding}::vector) AS match_score
    FROM users
    WHERE id != \${currentUserId} AND is_blocked = false
    ORDER BY match_score DESC 
    LIMIT 10;
  ;
  return matches;
};`,
    related: ['chatter_box', 'tragobook', 'everleaves-systems'],
    live:'https://unisoul-web.netlify.app/',
    // github:'https://github.com/Jerinbabujb/chatterbox-forntend'
  },
  {
    id: 'focus_flow',
    name: 'FOCUS FLOW – PRODUCTIVITY & FINANCE TRACKER',
    year: '2026', category: 'MOBILE PROJECT',
    image:'/focus-flow.png',
    description: 'A unified React Native application for managing daily tasks, collaborative grocery lists, and peer-to-peer debt tracking.',
    tags: ['React Native', 'Expo Go', 'Firebase ', 'Firestore'],
    status: 'ACTIVE PROJECT',
    vision: 'Eliminate the need for fragmented lifestyle apps by combining task management, shared group expenses, and smart grocery tracking into a single, cohesive, and minimalist mobile experience.',
    fullDescription: `Developed entirely in React Native with Firebase acting as the real-time synchronization layer, ensuring all group members see updates instantly.`,
    features: [
      { title: 'Smart Task Rollover', desc: 'Advanced to-do logic featuring custom repeat cycles, priority flagging, and automatic tomorrow-rollover for persistent tasks.' },
      { title: 'Collaborative Ledger', desc: 'Create groups to log shared expenses and track peer-to-peer debts, seamlessly syncing with the main expense tracker.' },
      { title: 'Receipt Parsing', desc: 'Camera integration to snap photos of grocery bills, automatically logging them into the shared grocery history.' },
      { title: 'Real-Time Cloud Sync', desc: 'Powered exclusively by Firebase Authentication and Firestore for instant data propagation across all authorized devices.' },
    ],
    stack: ['React Native', 'Expo Go', 'Firebase ', 'Firestore'],
    stats: [],
    code: `// Firestore listener for real-time task sync and rollover logic
const subscribeToTasks = (userId) => {
  return onSnapshot(
    query(collection(db, 'tasks'), where('userId', '==', userId)),
    (snapshot) => {
      const activeTasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        isRolledOver: checkRolloverCondition(doc.data().dueDate)
      }));
      setTasks(activeTasks);
    }
  );
};`,
    related: ['weather', 'chatter_box', 'unisoul'],
    live:'https://focus-flow-website.netlify.app/',
  },
  {
    id: 'chatter_box',
    name: 'CHATTER BOX – REAL-TIME CHAT APPLICATION',
    year: '2025', category: 'WEB PROJECT',
    image:'/chatter-box.png',
    description: 'A high-speed messaging dashboard featuring live text transmission, persistent media galleries, and secure socket connections.',
    tags: ['React (Vite)', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    status: 'ACTIVE PROJECT',
    vision: 'Deliver a frictionless, high-fidelity communication experience with instantaneous message delivery and a highly organized visual media tracking system.',
    fullDescription: `Built a decoupled full-stack architecture with a React frontend, Node/Express backend, and persistent storage via MongoDB and Cloudinary.`,
    features: [
      { title: 'Live WebSockets', desc: 'Low-latency, bi-directional event mapping for instant text and status updates across connected clients.' },
      { title: 'Media Gallery Sidebar', desc: 'Dedicated UI component that isolates and tracks all images sent and received between specific users.' },
      { title: 'Secure Sessions', desc: 'Custom JWT authentication handling secure login/logout states and route protection.' },
      { title: 'Optimized Storage', desc: 'Image uploads strictly routed through Cloudinary for optimized delivery, keeping the MongoDB footprint lightweight.' },
    ],
    stack: ['React (Vite)', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    stats: [],
    code: `// WebSocket event handling for real-time message broadcasting
io.on("connection",(socket)=>{
    const userId= socket.handshake.query.userId;
    console.log("user connected",userId);

    if(userId) userSocketMap[userId]=socket.id;
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    socket.on("disconnect",()=>{
        console.log("user disconnected",userId);
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    })
})`,
    related: ['unisoul', 'focus_flow', 'stream'],
  },
  {
    id: 'stream',
    name: 'VIDEO STREAM PLATFORM',
    year: '2025', category: 'STREAMING PROJECT',
    image:'/videostream.png',
    description: 'A cloud-based video streaming application utilizing chunked data delivery for smooth playback.',
    tags: ['React Vite', 'Node.js', 'Express.js', 'FFmpeg', 'Video.js', 'HLS/DASH', 'CSS'],
    status: 'ACTIVE PROJECT',
    vision: 'Provide seamless, buffer-free video playback by leveraging efficient media streaming protocols for high-performance delivery.',
    fullDescription: `Built an optimized streaming pipeline handling large media files by breaking them down into manageable segments for the client.`,
    features: [
      { title: 'Chunked Streaming', desc: 'Utilizes HLS/DASH protocols to serve video segments dynamically, reducing initial load times.' },
      { title: 'Media Processing', desc: 'Integrates FFmpeg on the server side to handle video transcoding and segment generation.' },
      { title: 'Cloud Integration', desc: 'Streams media content directly from cloud storage without requiring a dedicated database.' }    ],
    stack: ['React Vite', 'Node.js', 'Express.js', 'FFmpeg', 'Video.js', 'HLS/DASH', 'CSS'],
    stats: [],
    code: `//ffmpeg command
    const ffmpegCommand = 'ffmpeg -i \${videoPath} -codec:v libx264 -codec:a aac 
    -hls_time 10 -hls_playlist_type vod -hls_segment_filename 
    "\${outputhPath}/segment%03d.ts" -start_number 0 \${hlsPath}';
//no queue because of POC not for production  
    exec(ffmpegCommand,(error,stdout,stderr)=>{
        if(error){
            console.log('exec error: \${error}')
        }
        console.log('stdout: \${stdout}')
        console.log('stderr: \${stderr}')
        const videoUrl='\${url}/uploads/courses/\${lessaonId}/index.m3u8';
        res.json({message:"video converted to hls to format",
             videoUrl:videoUrl,
             lessaonId:lessaonId
        }
           
        )
    })`,
    related: ['unisoul', 'focus_flow', 'chatter_box'],
    live:'https://video-stream-55vf.onrender.com/',
    github:'https://github.com/Jerinbabujb/video-stream',
  },
  {
    id: 'weather',
    name: 'WEATHER-TIME CROSS PLATFORM APP',
    year: '2024', category: 'MOBILE PROJECT',
    image:'/weather.png',
    description: 'A global utility application built to fetch real-time weather metrics and localized time zones for any city worldwide.',
    tags: ['React Native', 'Expo Go', 'JavaScript', 'OpenWeatherMap API', 'GeoNames API'],
    status: 'STABLE',
    vision: 'Offer instantaneous, accurate environmental and temporal data globally through a unified, accessible mobile interface.',
    fullDescription: `Developed a lightweight, cross-platform mobile app utilizing external REST APIs to parse and display real-time global metrics.`,
    features: [
      { title: 'Global Weather Lookup', desc: 'Integrates OpenWeatherMap API to retrieve real-time temperature, wind speed, and humidity for any inputted city.' },
      { title: 'Localized Time Sync', desc: 'Utilizes GeoNames API to calculate and display the exact local time corresponding to the searched geography.' },
      { title: 'Cross-Platform Delivery', desc: 'Built natively with React Native and deployed via Expo Go for seamless iOS and Android accessibility.' }    ],
    stack: ['React Native', 'Expo Go', 'JavaScript', 'OpenWeatherMap API', 'GeoNames API'],
    stats: [],
    code: `/try{
    const response= await axios.get('https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${api_key}&units=metric');
    const timeResponse= await axios.get('http://api.geonames.org/timezone?lat=\${response.data.coord.lat}&lng=\${response.data.coord.lon}&username=jerin_21');
    setweatherData(response.data);
   
    const parser=new XMLParser();
    const jsonData=parser.parse(timeResponse.data);
    setTime(jsonData.geonames.timezone.time);
  }`,
    related: ['focus_flow', 'unisoul', 'chatter_box'],
    github:'https://github.com/Jerinbabujb/weather_app',
  },
 {
    id: 'bse',
    name: 'Bahrain Society of Engineers – MEMBERSHIP SYSTEM',
    year: '2025', 
    category: 'WEB PROJECT',
    image: '/bse.png',
    description: 'A comprehensive portal for managing organizational memberships, payment plans, and digital credentials.',
    tags: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'WPBakery', 'ARMember'],
    status: 'ACTIVE PROJECT',
    vision: 'Modernize professional association management with automated workflows, dedicated dashboards, and digitized access systems.',
    fullDescription: `Deployed a robust structural framework integrating complex membership logic, inter-portal messaging, and tiered data access.`,
    features: [
      { title: 'Dedicated Dashboards', desc: 'Personalized portals for members to view details, track payment history, and edit personal data.' },
      { title: 'Automated Tiering', desc: 'Admin-driven workflow that automatically assigns membership plans and access levels based on payment clearance.' },
      { title: 'Digital Credentials', desc: 'Generates dynamic, shareable digital membership cards for verified users.' },
      { title: 'Internal Messaging', desc: 'Built-in communication module allowing direct member-to-admin messaging and global announcements.' },
    ],
    stack: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'WPBakery', 'ARMember'],
    stats: [],
    code: `// class-bse-digital-card.php
// Registers a shortcode to generate a dynamic digital membership card
add_shortcode('bse_digital_card', 'generate_bse_digital_card');

function generate_bse_digital_card() {
    if (!is_user_logged_in()) {
        return '<p>Please log in to view your digital membership card.</p>';
    }
    \$current_user = wp_get_current_user();
    // Fetching ARMember plan and custom member ID from the database
    \$plan_name = get_user_meta(\$current_user->ID, 'arm_user_plan_name', true) ?: 
    'Standard Member';
    \$member_id = get_user_meta(\$current_user->ID, 'bse_member_id', true) ?: 'Pending';
    ob_start(); ?>
    <?php
    return ob_get_clean();
}`,
    related: ['everleaves-systems', 'eyf', 'tragobook'],
    live: 'https://member.bse.bh/ar/',
},
 {
    id: 'tragobook',
    name: 'TRAGOBOOK – HOTEL BOOKING PLATFORM',
    year: '2023', 
    category: 'WEB PROJECT',
    image: '/tragobook.png',
    description: 'A landing page and integrated mobile application for seamless hotel reservations, featuring multilingual support.',
    tags: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Elementor', 'React Native'],
    status: 'STABLE',
    vision: 'Unify the web booking experience and mobile accessibility into a single cohesive platform for international travelers.',
    fullDescription: `Designed a dual-interface system combining an API-driven web landing page with a native mobile webview application.`,
    features: [
      { title: 'API Integration', desc: 'Custom endpoint connections handling user authentication, login states, and newsletter registrations.' },
      { title: 'Multilingual UI', desc: 'Integrated translation functionality to serve an international user base navigating the landing page.' },
      { title: 'Mobile Webview', desc: 'A React Native shell application wrapping the core booking platform for mobile app store distribution.' }
    ],
    stack: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Elementor', 'React Native'],
    stats: [],
    code: `// App.js - React Native Webview Wrapper
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function TragoBookApp() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView 
        source={{ uri: 'https://www.tragobook.com/' }} 
        startInLoadingState={true}
        allowsBackForwardNavigationGestures={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' }
});`,
    related: ['everleaves-systems', 'eyf', 'bse'],
    live: 'https://www.tragobook.com/',
},
  {
    id: 'everleaves-systems',
    name: 'EVERLEAVES SYSTEMS – CORPORATE WEBSITE',
    year: '2025', 
    category: 'WEB PROJECT',
    image: '/everleaves-logo.png',
    description: 'A professional digital presence highlighting company services, mission, and team structure.',
    tags: ['WordPress', 'HTML', 'CSS', 'Elementor', 'MySQL'],
    status: 'ACTIVE PROJECT',
    vision: 'Establish a professional digital footprint that clearly communicates corporate values, core service offerings, and organizational structure.',
    fullDescription: `Developed a clean, static, content-driven site optimized for corporate communication and lead generation.`,
    features: [
      { title: 'Service Showcase', desc: "Dedicated sections outlining the company's core operations, mission, and strategic vision." },
      { title: 'Team Directory', desc: 'A structured visual layout detailing key personnel and organizational hierarchy.' },
      { title: 'Contact Integration', desc: 'Direct communication routing for inbound corporate inquiries.' }
    ],
    stack: ['WordPress', 'HTML', 'CSS', 'Elementor', 'MySQL'],
    stats: [],
    code: `// class-team-directory.php
// Registers a Custom Post Type for the Team Directory feature
function everleaves_register_team_cpt() {
    register_post_type('team_member', array(
        'labels' => array(
            'name' => 'Team Members',
            'singular_name' => 'Team Member'
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-groups',
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields')
    ));
}
add_action('init', 'everleaves_register_team_cpt');`,
    related: ['eyf', 'tragobook', 'unisoul'],
    live: 'https://everleavessystems.com/',
  },
  {
    id: 'eyf',
    name: 'ENGAGE YOUTH FOUNDATION',
    year: '2023', 
    category: 'WEB PROJECT',
    image: '/eyf.png',
    description: 'A non-profit organization platform featuring blog updates, upcoming events, and community outreach details.',
    tags: ['WordPress', 'HTML', 'CSS', 'Elementor', 'MySQL'],
    status: 'STABLE',
    vision: 'Empower youth initiatives by providing a centralized digital hub for event tracking, team visibility, and organizational mission updates.',
    fullDescription: `Constructed a dynamic content management system allowing admins to seamlessly update community events and publish outreach articles.`,
    features: [
      { title: 'Event Management', desc: 'Dedicated modules for listing, tracking, and displaying upcoming and past community events.' },
      { title: 'Blog Architecture', desc: 'Integrated publishing system for sharing articles, organization updates, and community stories.' },
      { title: 'Mission Overview', desc: "Clear presentation of the foundation's goals, team structure, and avenues for contact." }
    ],
    stack: ['WordPress', 'HTML', 'CSS', 'Elementor', 'MySQL'],
    stats: [],
    code: `// class-event-manager.php
// Shortcode to query and display upcoming community events
add_shortcode('eyf_upcoming_events', 'display_upcoming_events');

function display_upcoming_events() {
    \$args = array(
        'post_type' => 'event',
        'posts_per_page' => 3,
        'orderby' => 'date',
        'order' => 'DESC' // Fetches the latest events
    );
    
    \$events = new WP_Query(\$args);
    \$output = '<div class="eyf-events-list">';
    
    return \$output . '</div>';
}`,
    related: ['focus_flow', 'chatter_box', 'unisoul'],
  },
  {
    id: 'web-scrap',
    name: 'WEB SCRAPING TOOL',
    year: '2023', category: 'AUTOMATION PROJECT',
    image:'/webscrap.png',
    description: 'A Python-based utility engineered to extract critical data assets—including text, images, and embedded links—from any provided URL.',
    tags: ['Django', 'Python', 'BeautifulSoup4', 'Requests', 'html2pdf'],
    status: 'ACTIVE PROJECT',
    vision: 'Accelerate data extraction and content analysis by automating targeted page parsing and asset harvesting.',
    fullDescription: `Built a robust, server-side data pipeline capable of traversing DOM structures to compile and output structured data.`,
    features: [
      { title: 'Deep Asset Extraction', desc: 'Utilizes BeautifulSoup4 to scrape textual headings, image URLs, and all associated hyperlinks from a target page.' },
      { title: 'PDF Conversion', desc: 'Integrates html2pdf capabilities for generating static document reports based on the scraped data.' },
      { title: 'Stateless Processing', desc: 'Operates strictly via system cache without relying on a persistent database architecture.' }    ],
    stack: ['Django', 'Python', 'BeautifulSoup4', 'Requests', 'html2pdf'],
    stats: [],
    code: `def home(request):
    if request.method=='POST':
        h=request.POST.get('gl')
        ur=requests.get(h)
        beauti=BeautifulSoup(ur.text,'html.parser')
        for i in beauti.find_all('a'):
            lin=i.get('href')
            nam=i.string
            a=weblink(name=nam,lin=lin)
            a.save()
    bi=weblink.objects.all()
    return render(request,'home.html',{'b':bi})`,
    related: ['chatter_box', 'unisoul', 'focus_flow'],
  },
  {
    id: 'huloop',
    name: 'HULOOP AUTOMATION',
    year: '2024', 
    category: 'AUTOMATION PROJECT',
    image: '/huloop.png',
    description: 'An enterprise workflow automation tool focused on accelerating daily human tasks such as data entry and sheet validation.',
    tags: ['HuLoop Tool', 'JavaScript', 'Python'],
    status: 'ACTIVE PROJECT',
    vision: 'Reduce operational overhead and eliminate human error by intelligently automating repetitive, high-volume data tasks.',
    fullDescription: `Collaborated with off-shore teams to script and deploy automated task sequences for active client projects.`,
    features: [
      { title: 'Data Entry Automation', desc: 'Replaces manual typing and form filling with scripted data injection sequences.' },
      { title: 'Validation Scripts', desc: 'Automated routines for scanning and verifying data integrity across expansive spreadsheets.' },
      { title: 'Cost Reduction', desc: 'Measurably increases processing speed, directly reducing required human labor hours.' }
    ],
    stack: ['HuLoop Tool', 'JavaScript', 'Python'],
    stats: [],
    code: `# data_validator.py
import pandas as pd

def validate_spreadsheet(file_path):
    try:
        df = pd.read_excel(file_path)
        
        # Check for missing values in critical columns
        if df['Email'].isnull().any():
            print("Validation Error: Missing email addresses found.")
            return False
        
        # Ensure all transaction amounts are positive
        if (df['Amount'] <= 0).any():
            print("Validation Error: Invalid transaction amounts detected.")
            return False

        print("Validation Passed: Data is clean and ready for injection.")
        return True
        
    except Exception as e:
        print(f"Error reading file: {e}")
        return False`,
    related: ['unisoul', 'focus_flow', 'chatter_box'],
  },
  {
    id: 'slack',
    name: 'SLACK CLONE – REAL-TIME WORKSPACE',
    year: '2023', 
    category: 'WEB PROJECT',
    image: '/slack.jpeg',
    description: 'A comprehensive replica of the Slack workspace experience featuring instantaneous messaging and dynamic channel organization.',
    tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'WebSockets', 'Convex'],
    status: 'STABLE',
    vision: 'Recreate complex, enterprise-grade communication architectures by implementing instantaneous, reliable data synchronization across multiple clients.',
    fullDescription: `Developed a cutting-edge real-time application leveraging modern React frameworks and Convex for seamless state management.`,
    features: [
      { title: 'Real-Time Workspaces', desc: 'Full implementation of the core Slack experience, including instantaneous messaging and channel hopping.' },
      { title: 'Instant State Sync', desc: 'Utilizes Convex for rapid, highly-reactive database queries and real-time updates directly to the frontend.' },
      { title: 'Modern UI Architecture', desc: 'Built extensively with TailwindCSS for a highly responsive, enterprise-grade aesthetic mirroring the original platform.' },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'WebSockets', 'Convex'],
    stats: [],
    code: `// convex/messages.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const sendMessage = mutation({
  args: { 
    channelId: v.id("channels"), 
    body: v.string(), 
    authorId: v.id("users") 
  },
  handler: async (ctx, args) => {
    // Insert the new message into the Convex database
    const messageId = await ctx.db.insert("messages", {
      channelId: args.channelId,
      body: args.body,
      authorId: args.authorId,
      timestamp: Date.now(),
    });
    
    // Changes are automatically synced to all connected clients
    return messageId;
  },
});`,
    related: ['unisoul', 'focus_flow', 'chatter_box'],
  }
];

export const getProjectById = (id) => projects.find(p => p.id === id);
export const getRelatedProjects = (ids) => ids.map(id => projects.find(p => p.id === id)).filter(Boolean);
