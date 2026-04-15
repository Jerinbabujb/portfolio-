export const projects = [
  {
    id: 'neural_dock',
    name: 'Chatter Box – Real-Time Chat Application',
    year: '2025', category: 'CORE',
    description: 'A high-fidelity dashboard for monitoring LLM inference performance across distributed clusters.',
    tags: ['REACT (VITE)', 'MONGODB', 'TAILWIND', 'NODEJS', 'EXPRESSJS', 'WEBSOCKET','JWT','CLOUDINARY'],
    status: 'ACTIVE PROJECT',
    vision: 'Bridge the gap between raw inference metrics and actionable operational insight — making invisible bottlenecks visible in real time.',
    fullDescription: `Built a full-stack real-time chat application with secure authentication and live messaging using Socket.io. Integrated JWT-based auth, media uploads via Cloudinary, and a responsive UI with Tailwind CSS.`,
    features: [
      { title: 'Live Telemetry', desc: 'Sub-100ms latency data ingestion from distributed inference clusters with anomaly detection built in.' },
      { title: 'Model Profiling', desc: 'Per-layer latency breakdowns, attention map visualization, and KV-cache utilization tracking.' },
      { title: 'Auto-Scaling Hooks', desc: 'Triggers infrastructure scaling rules based on real-time queue depth and p95 latency thresholds.' },
      { title: 'Cluster Topology', desc: 'Interactive 3D cluster map rendered via Three.js, with live edge-bandwidth overlays.' },
    ],
    stack: ['REACT (VITE)', 'MONGODB', 'TAILWIND', 'NODEJS', 'EXPRESSJS', 'WEBSOCKET','JWT','CLOUDINARY'],
    stats: [{ label: 'COMMITS', value: '8' }, { label: 'COMPONENTS', value: '3' }],
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
    id: 'kinetic_ui',
    name: 'KINETIC_UI',
    year: '2023', category: 'LABS',
    description: 'A motion-first design system library leveraging Framer Motion and physical constraints.',
    tags: ['REACT', 'TAILWIND'],
    status: 'ACTIVE PROJECT',
    vision: 'Replace arbitrary easing curves with physics-based motion that makes every interaction feel weighted and real.',
    fullDescription: `KINETIC_UI started as an internal component library then evolved into a standalone open-source design system focused on one core principle: every UI element should behave as if it has physical mass.\n\nAnimations are parameterized around spring physics — stiffness, damping, and mass — rather than arbitrary easing curves. This creates interfaces that feel grounded, intentional, and surprisingly human. The system ships with 40+ components, a token system, and a Storybook environment.`,
    features: [
      { title: 'Spring Physics Engine', desc: 'All transitions governed by configurable spring constants — stiffness, damping, mass.' },
      { title: 'Token Architecture', desc: 'Design tokens for motion, color, spacing, and typography with dark/light mode support.' },
      { title: '40+ Components', desc: 'Production-ready components from primitives to complex compositional patterns.' },
      { title: 'Storybook Integration', desc: 'Full Storybook environment with interactive controls for every motion parameter.' },
    ],
    stack: ['REACT', 'TAILWIND CSS', 'FRAMER MOTION', 'TYPESCRIPT', 'STORYBOOK', 'ROLLUP'],
    stats: [{ label: 'COMMITS', value: '5.1k' }, { label: 'COMPONENTS', value: '40+' }, { label: 'LATENCY', value: '<16ms' }, { label: 'STARS', value: '2.1k' }],
    code: `// spring.ts
export const springs = {
  snappy: { stiffness: 400, damping: 28, mass: 0.8 },
  gentle: { stiffness: 120, damping: 20, mass: 1.2 },
  bouncy: { stiffness: 300, damping: 15, mass: 0.6 },
} satisfies Record<string, SpringConfig>;`,
    related: ['mesh_grid', 'chroma_sync', 'node_core'],
  },
  {
    id: 'quantum_flow',
    name: 'QUANTUM_FLOW',
    year: '2024', category: 'ENTERPRISE',
    description: 'Real-time visual data orchestrator for supply chain logistics. Processing 50k+ events per second with sub-10ms latency visual feedback.',
    tags: ['THREE.JS', 'GO', 'KAFKA'],
    status: 'ACTIVE PROJECT',
    vision: 'Transform reactive supply chain management into proactive orchestration — seeing disruptions 15 minutes before they escalate.',
    fullDescription: `QUANTUM_FLOW was built for a global logistics operator managing 12,000+ daily shipments across 6 continents. The challenge: surface supply chain disruptions before they cascade — giving operators a 15-minute window to reroute.\n\nA Go-based orchestration layer processes 50k+ events/second, applying ML-based anomaly scoring before surfacing alerts. The Three.js frontend renders a live global logistics map with animated shipment flows.`,
    features: [
      { title: 'Global Logistics Map', desc: 'Three.js globe with animated shipment routes, carrier feeds, and real-time port congestion data.' },
      { title: '50k+ Events/sec', desc: 'Kafka-based event bus with Go orchestration layer handling peak loads with sub-10ms visual feedback.' },
      { title: 'Predictive Disruption', desc: 'ML scoring model flags high-risk shipments 15 minutes before delays become critical.' },
      { title: 'Smart Alerting', desc: 'Contextual alerts with recommended rerouting options and carrier substitution suggestions.' },
    ],
    stack: ['THREE.JS', 'GO', 'KAFKA', 'APACHE FLINK', 'POSTGRESQL', 'REDIS'],
    stats: [{ label: 'COMMITS', value: '11.4k' }, { label: 'EVENTS/S', value: '50k+' }, { label: 'LATENCY', value: '<10ms' }, { label: 'SHIPMENTS', value: '12k+' }],
    code: `// stream.go
func (o *Orchestrator) ProcessEventStream(ctx context.Context) error {
  reader := kafka.NewReader(kafka.ReaderConfig{
    Topic:   "logistics.events.v2",
    GroupID: "quantum-flow-core",
  })
  for {
    msg, _ := reader.ReadMessage(ctx)
    event := o.parser.Decode(msg.Value)
    score := o.anomalyModel.Score(event)
    if score > 0.75 {
      o.alertChannel <- Alert{Event: event, Score: score}
    }
  }
}`,
    related: ['neural_dock', 'pulse_metric', 'stratus_os'],
  },
  {
    id: 'cypher_vault',
    name: 'CYPHER_VAULT',
    year: '2023', category: 'SEC',
    description: 'Decentralized identity management protocol with zero-knowledge proof verification.',
    tags: ['SOLIDITY', 'WEB3.JS'],
    status: 'ACTIVE PROJECT',
    vision: 'Eliminate centralized identity honeypots — give users cryptographic control over what they reveal and to whom.',
    fullDescription: `CYPHER_VAULT addresses the fundamental problem with centralized identity systems: a single breach exposes millions. By moving identity verification on-chain with zero-knowledge proofs, users can prove attributes about themselves without revealing the underlying data.\n\nBuilt on Ethereum L2, the protocol uses zk-SNARKs to generate compact proofs verified by smart contracts. The architecture supports selective disclosure — users choose exactly what to reveal per context.`,
    features: [
      { title: 'ZK-SNARK Proofs', desc: 'Prove age, residency, or credentials without revealing source data. Compact proofs, fast on-chain verification.' },
      { title: 'Selective Disclosure', desc: 'Per-context attribute revelation — prove you\'re 18+ without revealing your birthdate.' },
      { title: 'Auto-Expiry', desc: 'Credentials with built-in TTL that become cryptographically invalid after defined windows.' },
      { title: 'Cross-Chain', desc: 'Proof verification works across EVM-compatible chains with a unified resolver.' },
    ],
    stack: ['SOLIDITY', 'WEB3.JS', 'CIRCOM', 'SNARKJS', 'ETHEREUM L2', 'IPFS'],
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
    id: 'stratus_os',
    name: 'STRATUS_OS',
    year: '2022', category: 'ARCH',
    description: 'Cloud-native operating environment for serverless micro-frontends with instant deployment.',
    tags: ['AWS', 'KUBERNETES'],
    status: 'STABLE',
    vision: 'Make micro-frontend architecture feel like a monolith — seamless from the user\'s perspective, independently deployable from the team\'s.',
    fullDescription: `STRATUS_OS was built to solve the micro-frontend cold start problem at scale. As organizations decompose monolith frontends into independently deployable micro-apps, the seams between them become failure points.\n\nSTRATUS_OS acts as an orchestration runtime that pre-warms micro-frontend containers, manages shared module federation, handles cross-MFE state, and provides a unified DevEx pipeline with instant preview deployments on every commit.`,
    features: [
      { title: 'Pre-warming Engine', desc: 'Predictive container warm-up based on navigation patterns, eliminating cold-start latency.' },
      { title: 'Module Federation', desc: 'Webpack 5 Module Federation with runtime dependency negotiation and version conflict resolution.' },
      { title: 'Instant Preview Deploy', desc: 'Git-push-triggered preview deployments in under 30 seconds via ECS Fargate.' },
      { title: 'Cross-MFE State', desc: 'Shared context bus for authentication state, user preferences, and cross-app messaging.' },
    ],
    stack: ['AWS', 'KUBERNETES', 'WEBPACK 5', 'MODULE FEDERATION', 'TERRAFORM', 'CDK'],
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
    id: 'mint_stream',
    name: 'MINT_STREAM',
    year: '2024', category: 'DEFI',
    description: 'Real-time NFT marketplace aggregator with automated arbitrage detection and execution.',
    tags: ['ETHEREUM', 'PYTHON'],
    status: 'ACTIVE PROJECT',
    vision: 'Democratize institutional-grade NFT market intelligence — give individual collectors the tools only quantitative funds had.',
    fullDescription: `MINT_STREAM aggregates listings across 8 major NFT marketplaces in real time, applying statistical arbitrage models to surface mispriced assets before the broader market corrects.\n\nFor power users, automated execution strategies can be configured — setting bid/ask spreads, maximum exposure per collection, and gas price thresholds. The system processes 400k+ marketplace events per day with p99 detection latency under 800ms.`,
    features: [
      { title: 'Multi-Marketplace Feed', desc: 'Live aggregation from OpenSea, Blur, LooksRare, X2Y2, and 4 others via WebSocket.' },
      { title: 'Arbitrage Detection', desc: 'Statistical models flagging cross-marketplace price discrepancies in under 800ms p99.' },
      { title: 'Automated Execution', desc: 'Configurable bidding strategies with gas optimization and MEV protection.' },
      { title: 'Portfolio Analytics', desc: 'Realized/unrealized P&L, floor-price tracking, and collection correlation matrices.' },
    ],
    stack: ['ETHEREUM', 'PYTHON', 'WEB3.PY', 'ASYNCIO', 'POSTGRESQL', 'REDIS STREAMS'],
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
    id: 'chroma_sync',
    name: 'CHROMA_SYNC',
    year: '2023', category: 'BRAND',
    description: 'IoT synchronization platform for architectural lighting installations.',
    tags: ['C++', 'ZIGBEE'],
    status: 'STABLE',
    vision: 'Treat architectural light as a programmable material — choreograph entire buildings the way you\'d animate a canvas.',
    fullDescription: `CHROMA_SYNC started as a custom project for a large-scale architectural lighting installation at a cultural center in Berlin — 2,400 individually addressable fixtures across a 6-story atrium, all needing to respond to audio, time-of-day, and occupancy inputs in sub-frame time.\n\nThe system uses a Zigbee mesh for low-latency device communication, with a C++ edge orchestrator handling real-time lighting calculations.`,
    features: [
      { title: '2,400 Fixture Control', desc: 'Sub-frame latency synchronization across Zigbee mesh with automatic topology healing.' },
      { title: 'Audio Reactivity', desc: 'FFT-based audio analysis driving real-time fixture responses with configurable mapping curves.' },
      { title: 'Timeline Sequencer', desc: 'Visual multi-track editor for choreographing zone-based lighting sequences with ms precision.' },
      { title: 'Remote Operation', desc: 'iOS and Android apps for live adjustment and emergency override during installations.' },
    ],
    stack: ['C++', 'ZIGBEE', 'EMBEDDED LINUX', 'WEBRTC', 'SWIFT', 'KOTLIN'],
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
    id: 'pulse_metric',
    name: 'PULSE_METRIC',
    year: '2024', category: 'DATA',
    description: 'Predictive analytics engine for e-commerce conversion optimization.',
    tags: ['PYTORCH', 'GRAPHQL'],
    status: 'ACTIVE PROJECT',
    vision: 'Shift e-commerce analytics from post-hoc reporting to real-time behavioral intervention before revenue is lost.',
    fullDescription: `PULSE_METRIC was built to answer the question that stumps most e-commerce analytics teams: not what happened, but what's about to happen. By training conversion models on behavioral sequences rather than aggregate metrics, PULSE_METRIC predicts session-level conversion probability in real time.\n\nWhen a session enters a high-churn probability state, the system triggers personalized interventions before the user exits.`,
    features: [
      { title: 'Session Scoring', desc: 'LSTM-based model predicting conversion probability from behavioral sequences, updated every 10s.' },
      { title: 'Intervention Engine', desc: 'Configurable triggers for offers, friction reduction, and live chat based on probability thresholds.' },
      { title: 'SDK Integration', desc: '2KB JavaScript SDK with zero-dependency GraphQL client, compatible with any storefront.' },
      { title: 'Cohort Analysis', desc: 'Session replay correlation with conversion outcomes for model training data collection.' },
    ],
    stack: ['PYTORCH', 'GRAPHQL', 'PYTHON', 'FASTAPI', 'CLICKHOUSE', 'KAFKA'],
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
    id: 'mesh_grid',
    name: 'MESH_GRID',
    year: '2022', category: 'DESIGN',
    description: 'A parametric layout engine for generating thousands of UI variations based on intent.',
    tags: ['TYPESCRIPT', 'FIGMA API'],
    status: 'STABLE',
    vision: 'Replace layout templates with parametric intent — describe what a layout should achieve, not how it should look.',
    fullDescription: `MESH_GRID emerged from a specific frustration: design systems promise consistency but deliver rigidity. Real products need layouts that adapt to content density, viewport, user context, and brand intent.\n\nThe engine takes an intent declaration and generates a parametric layout spec. Integrates with the Figma API to render variations directly as frames, letting designers select from hundreds of generated options.`,
    features: [
      { title: 'Intent Parser', desc: 'NLP-based intent interpreter converting design goals into parametric layout constraints.' },
      { title: 'Variation Engine', desc: 'Constraint-satisfaction algorithm generating 100-500 unique valid layouts per intent.' },
      { title: 'Figma Integration', desc: 'Figma Plugin API integration for direct frame generation in design files.' },
      { title: 'Responsive Specs', desc: 'Each layout exported with breakpoint-aware spacing tokens and grid specifications.' },
    ],
    stack: ['TYPESCRIPT', 'FIGMA API', 'OPENAI API', 'NODE.JS', 'CANVAS API'],
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
    id: 'node_core',
    name: 'NODE_CORE',
    year: '2023', category: 'CORE',
    description: 'High-performance API gateway with built-in edge caching and request signing.',
    tags: ['NODE.JS', 'REDIS'],
    status: 'ACTIVE PROJECT',
    vision: 'Make API gateway configuration invisible — sensible defaults that cover 90% of cases, escape hatches for the rest.',
    fullDescription: `NODE_CORE is a production API gateway built around three constraints: sub-5ms overhead at the gateway layer, cryptographic request signing for all upstream calls, and zero-config edge caching.\n\nDeployed as a lightweight Node.js process, it handles auth token validation, rate limiting, request transformation, and cache management.`,
    features: [
      { title: '<5ms Gateway Overhead', desc: 'Async request pipeline with zero-copy request forwarding and lightweight middleware stack.' },
      { title: 'Request Signing', desc: 'HMAC-SHA256 transparent signing of all upstream requests with key rotation support.' },
      { title: 'Smart Edge Cache', desc: 'Redis-backed cache with ETag-based invalidation and configurable TTL strategies.' },
      { title: 'Rate Limiting', desc: 'Per-consumer, per-route rate limiting with Redis sliding window and burst allowances.' },
    ],
    stack: ['NODE.JS', 'REDIS', 'TYPESCRIPT', 'FASTIFY', 'PROMETHEUS', 'DOCKER'],
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
    id: 'gene_map',
    name: 'GENE_MAP',
    year: '2024', category: 'LABS',
    description: 'Visual explorer for genomic sequences, rendering millions of base pairs in the browser.',
    tags: ['WEBASSEMBLY', 'WEBGL'],
    status: 'ACTIVE PROJECT',
    vision: 'Bring whole-genome exploration to the browser — no server, no wait, no compromise on sequence scale.',
    fullDescription: `GENE_MAP tackles a visualization problem that had no good browser-based solution: rendering and interacting with genomic sequences at the scale of whole chromosomes — hundreds of millions of base pairs — without server round-trips.\n\nThe core is a WASM module compiled from Rust that handles sequence parsing, k-mer indexing, and feature annotation queries at near-native speed.`,
    features: [
      { title: 'Whole-Genome Rendering', desc: 'WebGL instanced rendering of 3B+ base pairs with fluid zoom from chromosome to nucleotide.' },
      { title: 'WASM Sequence Engine', desc: 'Rust-compiled WASM for k-mer indexing, motif search, and annotation queries at native speed.' },
      { title: 'Feature Annotation', desc: 'GTF/GFF3 annotation overlay with gene, exon, and regulatory element visualization.' },
      { title: 'Motif Search', desc: 'Real-time pattern search across entire genome sequences with mismatch tolerance.' },
    ],
    stack: ['WEBASSEMBLY', 'WEBGL', 'RUST', 'WASM-PACK', 'REACT', 'TYPESCRIPT'],
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
    id: 'bit_archive',
    name: 'BIT_ARCHIVE',
    year: '2023', category: 'HARDWARE',
    description: 'A specialized filesystem for cold storage of petabyte-scale cultural data.',
    tags: ['C', 'LINUX KERNEL'],
    status: 'STABLE',
    vision: 'Build a filesystem that treats data longevity as a first-class constraint — designed to recover gracefully from partial hardware failure decades later.',
    fullDescription: `BIT_ARCHIVE was commissioned by a digital preservation organization responsible for archiving 80+ years of broadcast media, totaling 4.2 petabytes. Existing cold storage filesystems couldn't handle the access patterns: highly sequential writes, infrequent but large random reads, and strict integrity verification.\n\nThe custom Linux filesystem implements a write-once, content-addressed layout optimized for LTO tape and high-density HDD arrays.`,
    features: [
      { title: 'Tape-Optimized Layout', desc: 'Sequential write-optimized extent allocation for LTO tape, minimizing head seeks by 94%.' },
      { title: 'Reed-Solomon ECC', desc: 'Configurable redundancy levels with in-place recovery from up to 30% sector corruption.' },
      { title: 'Content Addressing', desc: 'SHA-256 content hashing as primary key — zero duplicates, automatic integrity verification.' },
      { title: 'Tiered Index', desc: 'B-tree primary index with LRU-cached hot paths for fast lookup across petabyte archives.' },
    ],
    stack: ['C', 'LINUX KERNEL', 'FUSE', 'LIBSSL', 'PYTHON', 'BASH'],
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
  },
  {
    id: 'neural_sync_v4',
    name: 'NEURAL_SYNC_V4',
    year: '2024', category: 'CORE',
    description: 'A decentralized architectural framework for low-latency visual data distribution.',
    tags: ['TYPESCRIPT', 'WEBASSEMBLY', 'RUST', 'THREE.JS'],
    status: 'ACTIVE PROJECT',
    vision: 'Treat visual data as a living material — constantly flowing, reshaping, and responding to the systems it represents.',
    fullDescription: `The Neural_Sync project was born from the necessity to bridge the gap between high-frequency data streams and real-time visual architectural rendering. Unlike traditional static portfolios, this system treats data as a kinetic element, constantly flowing and reshaping the interface.\n\nLeveraging custom-built WebGL shaders and a Rust-based backend, the architecture ensures sub-50ms latency across global clusters.`,
    features: [
      { title: 'Real-time Telemetry', desc: 'Integrated monitoring system for live tracking of node performance and bandwidth allocation.' },
      { title: 'Modular Core', desc: 'Hot-swappable visual modules that allow for instantaneous UI transformation without downtime.' },
      { title: 'Global Clusters', desc: 'Sub-50ms latency architecture spanning multiple geographic regions with automatic failover.' },
      { title: 'Procedural Rendering', desc: 'Custom WebGL shaders generating reactive visual environments from live data streams.' },
    ],
    stack: ['TYPESCRIPT', 'WEBASSEMBLY', 'RUST', 'THREE.JS', 'GRAPHQL', 'TAILWIND CSS'],
    stats: [{ label: 'COMMITS', value: '12.4k' }, { label: 'RENDER SPEED', value: '4.8s' }, { label: 'LATENCY', value: '<50ms' }, { label: 'NODES', value: '1k+' }],
    code: `// engine_init.rs
fn initialize_kinetic_mesh(config: SyncConfig) -> Result<(), EngineError> {
  // Establishing neural pathway connection
  let core = ArchitectCore::spawn(config.cluster_id)?;
  // Define spatial asymmetry offsets
  core.set_layer_depth(0.135, true);
  return Ok(());
}`,
    related: ['neural_dock', 'quantum_flow', 'kinetic_ui'],
  },
];

export const getProjectById = (id) => projects.find(p => p.id === id);
export const getRelatedProjects = (ids) => ids.map(id => projects.find(p => p.id === id)).filter(Boolean);
