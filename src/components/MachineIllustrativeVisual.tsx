import type {GalleryViewMode, SchematicKind} from '../data/products';

interface MachineIllustrativeVisualProps {
  kind: SchematicKind;
  mode?: GalleryViewMode;
  modelLabel: string;
  compact?: boolean;
  showCaption?: boolean;
}

const PROCESS_STEPS: Record<SchematicKind, string[]> = {
  'syringe-assembly': [
    '01. Barrel Feed',
    '02. Silicone Spray',
    '03. Plunger & Gasket',
    '04. Sensor Check',
    '05. Discharge',
  ],
  'needle-assembly': [
    '01. Hub Feeding',
    '02. Cannula Insert',
    '03. Bonding / Curing',
    '04. Cap Assembly',
    '05. Inspection',
  ],
  'barrel-printing': [
    '01. Barrel Infeed',
    '02. Indexing Clamp',
    '03. Screen Printing',
    '04. Ink Reclaim',
    '05. Outfeed',
  ],
  'blister-packing': [
    '01. Film Pre-Heat',
    '02. Thermoform',
    '03. Product Feed',
    '04. Heat Seal & Code',
    '05. Cross Cut',
  ],
  'insulin-assembly': [
    '01. Fine-Pitch Feed',
    '02. Barrel Prep',
    '03. Precision Insert',
    '04. Component Check',
    '05. Output Tray',
  ],
  'injection-mould': [
    '01. Polymer Melt',
    '02. Runner Fill',
    '03. Multi-Cavity',
    '04. Cooling Cycle',
    '05. Ejection',
  ],
};

const FOOTPRINT_SPECS: Record<
  SchematicKind,
  {widthText: string; lengthText: string; heightText: string; listed: boolean}
> = {
  'syringe-assembly': {
    widthText: '2,000 mm (W)',
    lengthText: '7,200 mm (L)',
    heightText: '1,900 mm (H)',
    listed: true,
  },
  'barrel-printing': {
    widthText: '1,500 mm (W)',
    lengthText: '1,800 mm (D)',
    heightText: '1,760 mm (H)',
    listed: true,
  },
  'blister-packing': {
    widthText: '1,380 mm (W)',
    lengthText: '9,470 mm (D)',
    heightText: '1,800 mm (H)',
    listed: true,
  },
  'needle-assembly': {
    widthText: 'Contact SGPKOREA',
    lengthText: 'Contact SGPKOREA',
    heightText: 'Contact SGPKOREA',
    listed: false,
  },
  'insulin-assembly': {
    widthText: 'Contact SGPKOREA',
    lengthText: 'Contact SGPKOREA',
    heightText: 'Contact SGPKOREA',
    listed: false,
  },
  'injection-mould': {
    widthText: 'Project-Specific',
    lengthText: 'Project-Specific',
    heightText: 'Project-Specific',
    listed: false,
  },
};

function renderElevationArtwork(kind: SchematicKind) {
  switch (kind) {
    case 'syringe-assembly':
      return (
        <g stroke="#0f172a" strokeWidth="1.5" fill="none">
          {/* Base stainless frame */}
          <rect x="44" y="168" width="392" height="58" fill="#e2e8f0" stroke="#334155" />
          <line x1="44" y1="184" x2="436" y2="184" stroke="#94a3b8" />
          {/* Support legs */}
          <rect x="60" y="226" width="12" height="22" fill="#475569" stroke="none" />
          <rect x="196" y="226" width="12" height="22" fill="#475569" stroke="none" />
          <rect x="332" y="226" width="12" height="22" fill="#475569" stroke="none" />
          <rect x="408" y="226" width="12" height="22" fill="#475569" stroke="none" />
          {/* Centrifugal feeder hopper on left */}
          <polygon points="56,120 112,120 100,168 68,168" fill="#cbd5e1" stroke="#1e293b" />
          <rect x="64" y="96" width="40" height="24" fill="#f8fafc" stroke="#1e293b" />
          <line x1="112" y1="138" x2="146" y2="122" stroke="#1d4ed8" strokeWidth="2" />
          {/* Main enclosed cleanroom assembly housing */}
          <rect x="146" y="88" width="224" height="80" fill="#ffffff" stroke="#0f172a" />
          <rect x="158" y="100" width="58" height="44" fill="#eff6ff" stroke="#1d4ed8" />
          <rect x="228" y="100" width="58" height="44" fill="#eff6ff" stroke="#1d4ed8" />
          <rect x="298" y="100" width="58" height="44" fill="#eff6ff" stroke="#1d4ed8" />
          {/* Linear indexing conveyor rail */}
          <line x1="132" y1="154" x2="424" y2="154" stroke="#1d4ed8" strokeWidth="2.5" />
          {/* Stations inside windows */}
          <line x1="187" y1="106" x2="187" y2="138" stroke="#0f172a" />
          <circle cx="187" cy="142" r="3" fill="#1d4ed8" stroke="none" />
          <line x1="257" y1="106" x2="257" y2="138" stroke="#0f172a" />
          <rect x="249" y="128" width="16" height="10" fill="#1d4ed8" stroke="none" />
          <line x1="327" y1="106" x2="327" y2="138" stroke="#0f172a" />
          <circle cx="327" cy="122" r="7" stroke="#0284c7" />
          {/* HMI Control Cabinet */}
          <rect x="380" y="96" width="52" height="72" fill="#0b1b34" stroke="#0b1b34" />
          <rect x="388" y="106" width="36" height="24" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="1" />
          <line x1="392" y1="142" x2="420" y2="142" stroke="#64748b" />
          <line x1="392" y1="150" x2="412" y2="150" stroke="#64748b" />
        </g>
      );

    case 'needle-assembly':
      return (
        <g stroke="#0f172a" strokeWidth="1.5" fill="none">
          {/* Rotary indexing table base */}
          <rect x="70" y="172" width="340" height="54" fill="#e2e8f0" stroke="#334155" />
          <rect x="88" y="226" width="14" height="22" fill="#475569" stroke="none" />
          <rect x="378" y="226" width="14" height="22" fill="#475569" stroke="none" />
          {/* Precision indexing turret */}
          <ellipse cx="240" cy="154" rx="116" ry="22" fill="#f8fafc" stroke="#1e293b" />
          <ellipse cx="240" cy="148" rx="92" ry="15" fill="#eff6ff" stroke="#1d4ed8" />
          {/* Central column & tooling heads */}
          <rect x="220" y="74" width="40" height="74" fill="#cbd5e1" stroke="#1e293b" />
          <rect x="132" y="96" width="38" height="44" fill="#ffffff" stroke="#1d4ed8" />
          <line x1="151" y1="140" x2="151" y2="152" stroke="#1d4ed8" strokeWidth="2" />
          <rect x="310" y="96" width="38" height="44" fill="#ffffff" stroke="#1d4ed8" />
          <line x1="329" y1="140" x2="329" y2="152" stroke="#1d4ed8" strokeWidth="2" />
          {/* Overhead gantry rail */}
          <rect x="108" y="70" width="264" height="14" fill="#0b1b34" stroke="none" />
          {/* Feeder bowls left & right */}
          <path d="M56 142 C56 126, 102 126, 102 142 L96 172 L62 172 Z" fill="#cbd5e1" stroke="#334155" />
          <path d="M378 142 C378 126, 424 126, 424 142 L418 172 L384 172 Z" fill="#cbd5e1" stroke="#334155" />
        </g>
      );

    case 'barrel-printing':
      return (
        <g stroke="#0f172a" strokeWidth="1.5" fill="none">
          {/* Compact screen-print cabinet */}
          <rect x="116" y="156" width="248" height="72" fill="#e2e8f0" stroke="#334155" />
          <rect x="134" y="228" width="14" height="20" fill="#475569" stroke="none" />
          <rect x="332" y="228" width="14" height="20" fill="#475569" stroke="none" />
          {/* Workbench lifting column */}
          <rect x="196" y="132" width="88" height="24" fill="#cbd5e1" stroke="#1e293b" />
          {/* Cylindrical barrel mandrel + print roller */}
          <rect x="150" y="114" width="180" height="18" fill="#ffffff" stroke="#1d4ed8" />
          <line x1="162" y1="123" x2="318" y2="123" stroke="#1d4ed8" strokeDasharray="4 3" />
          {/* Screen frame & balance blade assembly */}
          <rect x="140" y="78" width="200" height="28" fill="#eff6ff" stroke="#0f172a" />
          <polygon points="222,82 258,82 246,112 234,112" fill="#1d4ed8" stroke="none" />
          {/* Side barrel infeed chute */}
          <path d="M68 106 L138 118 L138 134 L68 124 Z" fill="#f8fafc" stroke="#334155" />
          {/* Control panel + 4-digit counter */}
          <rect x="372" y="102" width="52" height="68" fill="#0b1b34" stroke="none" />
          <rect x="380" y="112" width="36" height="16" fill="#0284c7" stroke="none" />
          <text x="398" y="123" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace" stroke="none">
            0000
          </text>
          <rect x="380" y="136" width="14" height="10" fill="#475569" stroke="none" />
          <rect x="402" y="136" width="14" height="10" fill="#1d4ed8" stroke="none" />
        </g>
      );

    case 'blister-packing':
      return (
        <g stroke="#0f172a" strokeWidth="1.5" fill="none">
          {/* Long inline thermoforming & sealing bed */}
          <rect x="34" y="168" width="412" height="56" fill="#e2e8f0" stroke="#334155" />
          <rect x="52" y="224" width="12" height="24" fill="#475569" stroke="none" />
          <rect x="180" y="224" width="12" height="24" fill="#475569" stroke="none" />
          <rect x="308" y="224" width="12" height="24" fill="#475569" stroke="none" />
          <rect x="418" y="224" width="12" height="24" fill="#475569" stroke="none" />
          {/* Film roll unwind */}
          <circle cx="62" cy="126" r="24" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <circle cx="62" cy="126" r="7" fill="#1d4ed8" stroke="none" />
          {/* Continuous blister web line */}
          <line x1="62" y1="150" x2="434" y2="150" stroke="#1d4ed8" strokeWidth="2.5" />
          {/* Station 1: Pre-heat & Thermoform */}
          <rect x="108" y="100" width="66" height="50" fill="#ffffff" stroke="#0f172a" />
          <rect x="118" y="112" width="46" height="18" fill="#dbeafe" stroke="#1d4ed8" />
          {/* Station 2: Syringe/Needle Infeed */}
          <rect x="192" y="114" width="68" height="36" fill="#f8fafc" stroke="#334155" />
          <line x1="202" y1="128" x2="250" y2="128" stroke="#64748b" />
          <line x1="202" y1="138" x2="250" y2="138" stroke="#64748b" />
          {/* Station 3: Paper roll & Heat Seal + Code Print */}
          <circle cx="304" cy="92" r="16" fill="#ffffff" stroke="#334155" />
          <rect x="278" y="108" width="64" height="42" fill="#eff6ff" stroke="#1d4ed8" />
          {/* Station 4: Cross/Horizontal Cutter */}
          <rect x="358" y="106" width="54" height="44" fill="#0b1b34" stroke="none" />
          <line x1="370" y1="128" x2="400" y2="128" stroke="#93c5fd" strokeWidth="2" />
        </g>
      );

    case 'insulin-assembly':
      return (
        <g stroke="#0f172a" strokeWidth="1.5" fill="none">
          {/* Cleanroom enclosure frame */}
          <rect x="56" y="168" width="368" height="56" fill="#e2e8f0" stroke="#334155" />
          <rect x="74" y="224" width="12" height="24" fill="#475569" stroke="none" />
          <rect x="234" y="224" width="12" height="24" fill="#475569" stroke="none" />
          <rect x="394" y="224" width="12" height="24" fill="#475569" stroke="none" />
          {/* Precision narrow-pitch cleanroom housing */}
          <rect x="78" y="84" width="324" height="84" fill="#ffffff" stroke="#0f172a" />
          {/* Fine-pitch micro stations */}
          <rect x="94" y="98" width="44" height="56" fill="#eff6ff" stroke="#1d4ed8" />
          <rect x="150" y="98" width="44" height="56" fill="#eff6ff" stroke="#1d4ed8" />
          <rect x="206" y="98" width="44" height="56" fill="#eff6ff" stroke="#1d4ed8" />
          <rect x="262" y="98" width="44" height="56" fill="#eff6ff" stroke="#1d4ed8" />
          {/* Syringe silhouette icons inside stations */}
          <line x1="116" y1="108" x2="116" y2="144" stroke="#0f172a" />
          <line x1="172" y1="108" x2="172" y2="144" stroke="#0f172a" />
          <line x1="228" y1="108" x2="228" y2="144" stroke="#1d4ed8" strokeWidth="2" />
          <line x1="284" y1="108" x2="284" y2="144" stroke="#0284c7" strokeWidth="2" />
          {/* Precision control module */}
          <rect x="322" y="98" width="64" height="56" fill="#0b1b34" stroke="none" />
          <rect x="332" y="108" width="44" height="24" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="1" />
        </g>
      );

    case 'injection-mould':
      return (
        <g stroke="#0f172a" strokeWidth="1.5" fill="none">
          {/* Fixed & moving mould plates cross-section */}
          <rect x="108" y="76" width="264" height="24" fill="#0b1b34" stroke="none" />
          <rect x="122" y="100" width="236" height="56" fill="#e2e8f0" stroke="#1e293b" />
          <line x1="112" y1="156" x2="368" y2="156" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="6 4" />
          <rect x="122" y="156" width="236" height="56" fill="#f8fafc" stroke="#1e293b" />
          <rect x="108" y="212" width="264" height="24" fill="#334155" stroke="none" />
          {/* Multi-cavity core pins */}
          {[156, 204, 252, 300].map((cx) => (
            <g key={cx}>
              <rect x={cx - 8} y="114" width="16" height="84" fill="#ffffff" stroke="#1d4ed8" />
              <line x1={cx} y1="100" x2={cx} y2="212" stroke="#0284c7" strokeWidth="1" />
            </g>
          ))}
          {/* Guide pillars */}
          <rect x="130" y="92" width="8" height="128" fill="#64748b" stroke="none" />
          <rect x="342" y="92" width="8" height="128" fill="#64748b" stroke="none" />
        </g>
      );
  }
}

export function MachineIllustrativeVisual({
  kind,
  mode = 'elevation',
  modelLabel,
  compact = false,
  showCaption = true,
}: MachineIllustrativeVisualProps) {
  const steps = PROCESS_STEPS[kind];
  const footprint = FOOTPRINT_SPECS[kind];

  return (
    <div className="flex h-full flex-col overflow-hidden border border-slate-200 bg-slate-50">
      <div className="spec-grid-bg relative flex-1 bg-slate-50">
        {/* Top technical index bar (clean unboxed text) */}
        <div className="flex items-center justify-between border-b border-slate-200/80 bg-white/85 px-4 py-2 text-[11px] font-mono text-slate-600">
          <span>SGPKOREA · {modelLabel}</span>
          <span className="text-slate-500">
            {mode === 'elevation'
              ? 'SCHEMATIC ELEVATION'
              : mode === 'process-flow'
                ? 'PROCESS SEQUENCE'
                : 'FOOTPRINT ENVELOPE'}
          </span>
        </div>

        <div className={compact ? 'aspect-[16/10] w-full p-3' : 'aspect-[16/9] w-full p-5 sm:p-7'}>
          {mode === 'elevation' ? (
            <svg
              viewBox="0 0 480 296"
              role="img"
              aria-label={`Illustrative engineering schematic for ${modelLabel}`}
              className="h-full w-full"
            >
              {/* Subtle drafting crosshair border */}
              <rect
                x="14"
                y="14"
                width="452"
                height="268"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="1"
              />
              {renderElevationArtwork(kind)}
              {/* Dimension witness baseline */}
              <line x1="44" y1="264" x2="436" y2="264" stroke="#94a3b8" strokeWidth="1" />
              <line x1="44" y1="259" x2="44" y2="269" stroke="#94a3b8" strokeWidth="1" />
              <line x1="436" y1="259" x2="436" y2="269" stroke="#94a3b8" strokeWidth="1" />
              <text
                x="240"
                y="276"
                textAnchor="middle"
                fill="#475569"
                fontSize="9.5"
                fontFamily="IBM Plex Mono, monospace"
              >
                ILLUSTRATIVE SCHEMATIC · NOT TO SCALE
              </text>
            </svg>
          ) : null}

          {mode === 'process-flow' ? (
            <div className="flex h-full flex-col justify-center">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
                {steps.map((step, idx) => (
                  <div
                    key={step}
                    className="flex flex-col justify-between border border-slate-300 bg-white p-3.5"
                  >
                    <span className="font-mono text-[11px] text-blue-700">
                      STAGE {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-3 text-xs font-semibold leading-snug text-slate-900">
                      {step.replace(/^\d+\.\s*/, '')}
                    </p>
                    <div className="mt-3 h-1 w-full bg-slate-100">
                      <div
                        className="h-full bg-blue-700"
                        style={{width: `${((idx + 1) / steps.length) * 100}%`}}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center font-mono text-[11px] text-slate-500">
                Illustrative station sequence — confirm exact module options with SGPKOREA
              </p>
            </div>
          ) : null}

          {mode === 'footprint' ? (
            <svg
              viewBox="0 0 480 280"
              role="img"
              aria-label={`Illustrative footprint envelope for ${modelLabel}`}
              className="h-full w-full"
            >
              <rect
                x="14"
                y="14"
                width="452"
                height="252"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="1"
              />
              {/* Top-down machine envelope */}
              <rect
                x="88"
                y="74"
                width="304"
                height="122"
                fill="#eff6ff"
                stroke="#1d4ed8"
                strokeWidth="2"
              />
              {/* Clearance envelope */}
              <rect
                x="68"
                y="54"
                width="344"
                height="162"
                fill="none"
                stroke="#64748b"
                strokeWidth="1"
                strokeDasharray="5 4"
              />
              {/* Length dimension line */}
              <line x1="88" y1="234" x2="392" y2="234" stroke="#0f172a" strokeWidth="1" />
              <line x1="88" y1="228" x2="88" y2="240" stroke="#0f172a" strokeWidth="1" />
              <line x1="392" y1="228" x2="392" y2="240" stroke="#0f172a" strokeWidth="1" />
              <text
                x="240"
                y="249"
                textAnchor="middle"
                fill="#0f172a"
                fontSize="11"
                fontFamily="IBM Plex Mono, monospace"
              >
                {footprint.lengthText}
              </text>
              {/* Width dimension label */}
              <text
                x="240"
                y="124"
                textAnchor="middle"
                fill="#0b1b34"
                fontSize="12"
                fontWeight="600"
                fontFamily="IBM Plex Mono, monospace"
              >
                {modelLabel}
              </text>
              <text
                x="240"
                y="144"
                textAnchor="middle"
                fill="#1e40af"
                fontSize="11"
                fontFamily="IBM Plex Mono, monospace"
              >
                {footprint.widthText} · {footprint.heightText}
              </text>
              <text
                x="240"
                y="166"
                textAnchor="middle"
                fill="#475569"
                fontSize="10"
                fontFamily="IBM Plex Mono, monospace"
              >
                {footprint.listed
                  ? 'BASED ON PUBLICLY LISTED DIMENSIONS · VERIFY INSTALLATION CLEARANCES'
                  : 'EXACT FOOTPRINT CONFIRMED DIRECTLY BY SGPKOREA'}
              </text>
            </svg>
          ) : null}
        </div>
      </div>

      {showCaption ? (
        <div className="border-t border-slate-200 bg-white px-4 py-2 text-[11px] leading-snug text-slate-500">
          Illustrative technical schematic · Official SGPKOREA photograph to be supplied upon
          authorisation
        </div>
      ) : null}
    </div>
  );
}
