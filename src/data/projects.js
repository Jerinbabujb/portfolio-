export const projects = [
  {
    id: 'neural_dock',
    name: 'Chatter Box – Real-Time Chat Application',
    year: '2025', category: 'CORE',
    description: 'A high-fidelity dashboard for monitoring LLM inference performance across distributed clusters.',
    tags: ['NEXT.JS 14', 'WEBKIT', 'RUST'],
    status: 'ACTIVE PROJECT',
    vision: 'Bridge the gap in modern dating by creating a safe, highly verifiable, and deeply interactive environment tailored for neurodivergent connections—where users connect over synchronized experiences rather than just swipes.',
    fullDescription: `Built a complex, real-time ecosystem utilizing websockets for live interactions, machine learning for matching, and a responsive UI deployed across web, Electron desktop, and a React Native webview.`,
    features: [
      { title: 'Vector Matchmaking Engine', desc: 'Utilizes Xenova Transformers to generate embeddings, matching users via cosine similarity algorithms and pgvector.' },
      { title: 'Synchronized Media Rooms', desc: 'Public and private chat rooms featuring live-synced shared jukeboxes and video streams powered by WebSockets.' },
      { title: 'Real-Time Biometrics', desc: 'Integrates Face API for immediate, real-time selfie authentication during onboarding to ensure platform integrity.' },
      { title: 'Granular Privacy Controls', desc: 'Features social media visibility toggles, user blocking, and strict custom JWT protected routes.' },
    ],
    stack: ['REACT (VITE)', 'MONGODB', 'TAILWIND', 'NODEJS', 'EXPRESSJS', 'WEBSOCKET','JWT','CLOUDINARY'],
    stats: [{ label: 'COMMITS', value: '8.2k' }, { label: 'LATENCY', value: '<50ms' }, { label: 'NODES', value: '500+' }, { label: 'UPTIME', value: '99.9%' }],
    code: `// cluster_monitor.rs
pub async fn stream_cluster_metrics(
  cluster_id: &str,
  tx: mpsc::Sender<NodeMetrics>,
) -> Result<(), DockError> {
  let nodes = ClusterState::hydrate(cluster_id).await?;
  for node in nodes.iter_active() {
    let metrics = node.poll_inference_stats().await?;
    tx.send(metrics).await?;
  }
  Ok(())
}`,
    related: ['kinetic_ui', 'pulse_metric', 'quantum_flow'],
    live:'https://chatterbox-chat.onrender.com/',
    github:'https://github.com/Jerinbabujb/chatterbox-forntend'
  },
  {
    id: 'focus_flow',
    name: 'FOCUS FLOW – PRODUCTIVITY & FINANCE TRACKER',
    year: '2026', category: 'MOBILE PROJECT',
    description: 'A unified React Native application for managing daily tasks, collaborative grocery lists, and peer-to-peer debt tracking.',
    tags: ['REACT', 'TAILWIND'],
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
    stats: [{ label: 'COMMITS', value: '5.1k' }, { label: 'COMPONENTS', value: '40+' }, { label: 'LATENCY', value: '<16ms' }, { label: 'STARS', value: '2.1k' }],
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
    related: ['unisoul', 'chatter_box', 'node_core'],
  },
  {
    id: 'chatter_box',
    name: 'CHATTER BOX – REAL-TIME CHAT APPLICATION',
    year: '2025', category: 'WEB PROJECT',
    description: 'A high-speed messaging dashboard featuring live text transmission, persistent media galleries, and secure socket connections.',
    tags: ['THREE.JS', 'GO', 'KAFKA'],
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
    stats: [{ label: 'COMMITS', value: '11.4k' }, { label: 'EVENTS/S', value: '50k+' }, { label: 'LATENCY', value: '<10ms' }, { label: 'SHIPMENTS', value: '12k+' }],
    code: `// WebSocket event handling for real-time message broadcasting
io.on("connection", (socket) => {
  socket.on("send_message", async (data) => {
    const savedMessage = await Message.create(data);
    
    // Broadcast exclusively to the recipient's private room
    socket.to(data.receiverRoom).emit("receive_message", {
      text: savedMessage.text,
      mediaUrl: savedMessage.mediaUrl,
      timestamp: savedMessage.createdAt
    });
  });
});
}`,
    related: ['unisoul', 'focus_flow', 'stratus_os'],
  },
  {
    id: 'stream',
    name: 'VIDEO STREAM PLATFORM',
    year: '2025', category: 'STREAMING PROJECT',
    description: 'A cloud-based video streaming application utilizing chunked data delivery for smooth playback.',
    tags: ['SOLIDITY', 'WEB3.JS'],
    status: 'ACTIVE PROJECT',
    vision: 'Provide seamless, buffer-free video playback by leveraging efficient media streaming protocols for high-performance delivery.',
    fullDescription: `Built an optimized streaming pipeline handling large media files by breaking them down into manageable segments for the client.`,
    features: [
      { title: 'Chunked Streaming', desc: 'Utilizes HLS/DASH protocols to serve video segments dynamically, reducing initial load times.' },
      { title: 'Media Processing', desc: 'Integrates FFmpeg on the server side to handle video transcoding and segment generation.' },
      { title: 'Cloud Integration', desc: 'Streams media content directly from cloud storage without requiring a dedicated database.' }    ],
    stack: ['React Vite', 'Node.js', 'Express.js', 'FFmpeg', 'Video.js', 'HLS/DASH', 'CSS'],
    stats: [{ label: 'COMMITS', value: '6.7k' }, { label: 'PROOFS/DAY', value: '50k+' }, { label: 'VERIFY TIME', value: '<200ms' }, { label: 'GAS SAVED', value: '94%' }],
    code: `// CypherVault.sol
contract CypherVault {
  function verifyAndIssue(
    uint256[2] calldata pA,
    uint256[2][2] calldata pB,
    uint256[2] calldata pC,
    uint256[1] calldata pubSignals
  ) external returns (bytes32 credentialId) {
    require(AgeVerifier.verifyProof(pA, pB, pC, pubSignals));
    credentialId = _issueCredential(msg.sender, pubSignals[0]);
  }
}`,
    related: ['mint_stream', 'bit_archive', 'neural_dock'],
  },
  {
    id: 'weather',
    name: 'WEATHER-TIME CROSS PLATFORM APP',
    year: '2024', category: 'MOBILE PROJECT',
    description: 'A global utility application built to fetch real-time weather metrics and localized time zones for any city worldwide.',
    tags: ['AWS', 'KUBERNETES'],
    status: 'STABLE',
    vision: 'Offer instantaneous, accurate environmental and temporal data globally through a unified, accessible mobile interface.',
    fullDescription: `Developed a lightweight, cross-platform mobile app utilizing external REST APIs to parse and display real-time global metrics.`,
    features: [
      { title: 'Global Weather Lookup', desc: 'Integrates OpenWeatherMap API to retrieve real-time temperature, wind speed, and humidity for any inputted city.' },
      { title: 'Localized Time Sync', desc: 'Utilizes GeoNames API to calculate and display the exact local time corresponding to the searched geography.' },
      { title: 'Cross-Platform Delivery', desc: 'Built natively with React Native and deployed via Expo Go for seamless iOS and Android accessibility.' }    ],
    stack: ['React Native', 'Expo Go', 'JavaScript', 'OpenWeatherMap API', 'GeoNames API'],
    stats: [{ label: 'COMMITS', value: '9.3k' }, { label: 'DEPLOY TIME', value: '<30s' }, { label: 'LATENCY', value: '<50ms' }, { label: 'UPTIME', value: '99.99%' }],
    code: `// warm.ts
export class StratusOrchestrator {
  async onNavigationEvent(route: string, userId: string) {
    const nextRoutes = await this.predictor.predict(userId, route);
    await Promise.all(
      nextRoutes.map(r => FargatePrewarmer.ensure(r.mfeId, {
        priority: r.confidence > 0.8 ? 'high' : 'normal',
      }))
    );
  }
}`,
    related: ['kinetic_ui', 'node_core', 'quantum_flow'],
  },
  {
    id: 'bse',
    name: 'Bahrain Society of Engineers – MEMBERSHIP SYSTEM',
    year: '2025', category: 'WEB PROJECT',
    description: 'A comprehensive portal for managing organizational memberships, payment plans, and digital credentials.',
    tags: ['ETHEREUM', 'PYTHON'],
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
    stats: [{ label: 'COMMITS', value: '7.8k' }, { label: 'EVENTS/DAY', value: '400k+' }, { label: 'DETECT TIME', value: '<800ms' }, { label: 'MARKETS', value: '8' }],
    code: `# arbitrage.py
class ArbitrageEngine:
    async def scan(self, collection_slug: str):
        listings = await self.feed.get_all(collection_slug)
        floor_by_market = self._compute_floors(listings)
        vwap = self._compute_vwap(listings, days=30)
        signals = []
        for market, floor in floor_by_market.items():
            if floor < vwap * (1 - self.threshold):
                signals.append(ArbitrageSignal(market, floor, vwap))
        return sorted(signals, key=lambda s: s.discount, reverse=True)`,
    related: ['cypher_vault', 'pulse_metric', 'chroma_sync'],
  },
  {
    id: 'tragobook',
    name: 'TRAGOBOOK – HOTEL BOOKING PLATFORM',
    year: '2023', category: 'WEB PROJECT',
    description: 'A landing page and integrated mobile application for seamless hotel reservations, featuring multilingual support.',
    tags: ['C++', 'ZIGBEE'],
    status: 'STABLE',
    vision: 'Unify the web booking experience and mobile accessibility into a single cohesive platform for international travelers.',
    fullDescription: `Designed a dual-interface system combining an API-driven web landing page with a native mobile webview application.`,
    features: [
      { title: 'API Integration', desc: 'Custom endpoint connections handling user authentication, login states, and newsletter registrations.' },
      { title: 'Multilingual UI', desc: 'Integrated translation functionality to serve an international user base navigating the landing page.' },
      { title: 'Mobile Webview', desc: 'A React Native shell application wrapping the core booking platform for mobile app store distribution.' }    ],
    stack: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Elementor', 'React Native'],
    stats: [{ label: 'COMMITS', value: '4.2k' }, { label: 'FIXTURES', value: '2400+' }, { label: 'LATENCY', value: '<8ms' }, { label: 'ZONES', value: '48' }],
    code: `// orchestrator.cpp
void Orchestrator::onAudioFrame(const AudioBuffer& buf) {
  auto spectrum = FFTAnalyzer::compute(buf, FFT_SIZE_1024);
  for (auto& zone : m_zones) {
    float brightness = zone.audioMapping.evaluate(spectrum);
    Color target = zone.palette.sample(brightness);
    m_mesh.broadcastToZone(zone.id, LightCommand{
      .color = target,
      .transition_ms = zone.transitionMs,
    });
  }
}`,
    related: ['kinetic_ui', 'mesh_grid', 'neural_dock'],
  },
  {
    id: 'everleaves-systems',
    name: 'EVERLEAVES SYSTEMS – CORPORATE WEBSITE',
    year: '2025', category: 'WEB PROJECT',
    description: 'A professional digital presence highlighting company services, mission, and team structure.',
    tags: ['PYTORCH', 'GRAPHQL'],
    status: 'ACTIVE PROJECT',
    vision: 'Establish a professional digital footprint that clearly communicates corporate values, core service offerings, and organizational structure.',
    fullDescription: `Developed a clean, static, content-driven site optimized for corporate communication and lead generation.`,
    features: [
      { title: 'Service Showcase', desc: "Dedicated sections outlining the company's core operations, mission, and strategic vision." },
      { title: 'Team Directory', desc: 'A structured visual layout detailing key personnel and organizational hierarchy.' },
      { title: 'Contact Integration', desc: 'Direct communication routing for inbound corporate inquiries.' }
    ],
    stack: ['WordPress', 'HTML', 'CSS', 'Elementor', 'MySQL'],
    stats: [{ label: 'COMMITS', value: '5.9k' }, { label: 'SESSIONS/DAY', value: '1M+' }, { label: 'UPDATE FREQ', value: '10s' }, { label: 'LIFT', value: '+18%' }],
    code: `# conversion_lstm.py
class ConversionLSTM(nn.Module):
    def __init__(self, input_dim=32, hidden_dim=128):
        super().__init__()
        self.lstm = nn.LSTM(input_dim, hidden_dim, 2,
                           batch_first=True, dropout=0.2)
        self.head = nn.Sequential(
            nn.Linear(hidden_dim, 64), nn.ReLU(),
            nn.Dropout(0.1), nn.Linear(64, 1), nn.Sigmoid()
        )
    def forward(self, event_seq):
        lstm_out, _ = self.lstm(event_seq)
        return self.head(lstm_out[:, -1, :])`,
    related: ['neural_dock', 'quantum_flow', 'mint_stream'],
  },
  {
    id: 'eyf',
    name: 'ENGAGE YOUTH FOUNDATION',
    year: '2023', category: 'WEB PROJECT',
    description: 'A non-profit organization platform featuring blog updates, upcoming events, and community outreach details.',
    tags: ['TYPESCRIPT', 'FIGMA API'],
    status: 'STABLE',
    vision: 'Empower youth initiatives by providing a centralized digital hub for event tracking, team visibility, and organizational mission updates.',
    fullDescription: `Constructed a dynamic content management system allowing admins to seamlessly update community events and publish outreach articles.`,
    features: [
      { title: 'Event Management', desc: 'Dedicated modules for listing, tracking, and displaying upcoming and past community events.' },
      { title: 'Blog Architecture', desc: 'Integrated publishing system for sharing articles, organization updates, and community stories.' },
      { title: 'Mission Overview', desc: "Clear presentation of the foundation's goals, team structure, and avenues for contact." }
    ],
    stack: ['WordPress', 'HTML', 'CSS', 'Elementor', 'MySQL'],
    stats: [{ label: 'COMMITS', value: '3.4k' }, { label: 'VARIANTS', value: '500+' }, { label: 'GEN TIME', value: '<5s' }, { label: 'PLUGINS', value: '3' }],
    code: `// generator.ts
export async function generateLayouts(
  intent: string, count = 100
): Promise<LayoutVariant[]> {
  const constraints = await IntentParser.parse(intent);
  const solver = new ConstraintSolver(constraints);
  const variants: LayoutVariant[] = [];
  while (variants.length < count) {
    const candidate = solver.sample();
    if (solver.validate(candidate)) variants.push(candidate);
  }
  return variants;
}`,
    related: ['kinetic_ui', 'chroma_sync', 'stratus_os'],
  },
  {
    id: 'web-scrap',
    name: 'WEB SCRAPING TOOL',
    year: '2023', category: 'AUTOMATION PROJECT',
    description: 'A Python-based utility engineered to extract critical data assets—including text, images, and embedded links—from any provided URL.',
    tags: ['NODE.JS', 'REDIS'],
    status: 'ACTIVE PROJECT',
    vision: 'Accelerate data extraction and content analysis by automating targeted page parsing and asset harvesting.',
    fullDescription: `Built a robust, server-side data pipeline capable of traversing DOM structures to compile and output structured data.`,
    features: [
      { title: 'Deep Asset Extraction', desc: 'Utilizes BeautifulSoup4 to scrape textual headings, image URLs, and all associated hyperlinks from a target page.' },
      { title: 'PDF Conversion', desc: 'Integrates html2pdf capabilities for generating static document reports based on the scraped data.' },
      { title: 'Stateless Processing', desc: 'Operates strictly via system cache without relying on a persistent database architecture.' }    ],
    stack: ['Django', 'Python', 'BeautifulSoup4', 'Requests', 'html2pdf'],
    stats: [{ label: 'COMMITS', value: '6.1k' }, { label: 'OVERHEAD', value: '<5ms' }, { label: 'REQ/S', value: '10k+' }, { label: 'CACHE HIT', value: '91%' }],
    code: `// pipeline.ts
gateway.addHook('preHandler', async (req, reply) => {
  const limited = await RateLimiter.check(req.headers['x-consumer-id']);
  if (limited) return reply.code(429).send({ error: 'rate_limited' });
  const cached = await EdgeCache.get(req.routerPath, req.query);
  if (cached) return reply.send(cached);
});`,
    related: ['stratus_os', 'quantum_flow', 'neural_dock'],
  },
  {
    id: 'huloop',
    name: 'HULOOP AUTOMATION',
    year: '2024', category: 'AUTOMATION PROJECT',
    description: 'An enterprise workflow automation tool focused on accelerating daily human tasks such as data entry and sheet validation.',
    tags: ['WEBASSEMBLY', 'WEBGL'],
    status: 'ACTIVE PROJECT',
    vision: 'Reduce operational overhead and eliminate human error by intelligently automating repetitive, high-volume data tasks.',
    fullDescription: `Collaborated with off-shore teams to script and deploy automated task sequences for active client projects.`,
    features: [
      { title: 'Data Entry Automation', desc: 'Replaces manual typing and form filling with scripted data injection sequences.' },
      { title: 'Validation Scripts', desc: 'Automated routines for scanning and verifying data integrity across expansive spreadsheets.' },
      { title: 'Cost Reduction', desc: 'Measurably increases processing speed, directly reducing required human labor hours.' }
    ],
    stack: ['HuLoop Tool', 'JavaScript', 'Python'],
    stats: [{ label: 'COMMITS', value: '4.8k' }, { label: 'BASE PAIRS', value: '3B+' }, { label: 'ZOOM TIME', value: '<100ms' }, { label: 'K-MER', value: '16-mer' }],
    code: `// sequence_engine.rs
#[wasm_bindgen]
impl SequenceEngine {
  pub fn new(sequence_data: &[u8]) -> Self {
    let mut engine = Self {
      sequence: sequence_data.to_vec(),
      kmer_index: HashMap::new(),
    };
    engine.build_index(16);
    engine
  }
}`,
    related: ['neural_dock', 'quantum_flow', 'pulse_metric'],
  },
  {
    id: 'slack',
    name: 'SLACK CLONE – REAL-TIME WORKSPACE',
    year: '2023', category: 'WEB PROJECT',
    description: 'A comprehensive replica of the Slack workspace experience featuring instantaneous messaging and dynamic channel organization.',
    tags: ['C', 'LINUX KERNEL'],
    status: 'STABLE',
    vision: 'Recreate complex, enterprise-grade communication architectures by implementing instantaneous, reliable data synchronization across multiple clients.',
    fullDescription: `Developed a cutting-edge real-time application leveraging modern React frameworks and Convex for seamless state management.`,
    features: [
      { title: 'Real-Time Workspaces', desc: 'Full implementation of the core Slack experience, including instantaneous messaging and channel hopping.' },
      { title: 'Instant State Sync', desc: 'Utilizes Convex for rapid, highly-reactive database queries and real-time updates directly to the frontend.' },
      { title: 'Modern UI Architecture', desc: 'Built extensively with TailwindCSS for a highly responsive, enterprise-grade aesthetic mirroring the original platform.' },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'WebSockets', 'Convex'],
    stats: [{ label: 'COMMITS', value: '2.9k' }, { label: 'ARCHIVE SIZE', value: '4.2PB' }, { label: 'SEEK REDUCTION', value: '94%' }, { label: 'ECC RECOVERY', value: '30%' }],
    code: `/* extent_alloc.c */
int ba_alloc_extent(struct ba_sb *sb, u64 size_bytes,
                    struct ba_extent *out_extent) {
  struct ba_run *run = fl_find_contiguous(sb->free_list, size_bytes);
  if (!run) return -ENOSPC;
  out_extent->start_lba = run->start;
  out_extent->ecc_level = ba_compute_ecc_level(sb, size_bytes);
  rs_encode_extent(out_extent, sb->ecc_params);
  return 0;
}`,
    related: ['cypher_vault', 'node_core', 'gene_map'],
  }
];

export const getProjectById = (id) => projects.find(p => p.id === id);
export const getRelatedProjects = (ids) => ids.map(id => projects.find(p => p.id === id)).filter(Boolean);
