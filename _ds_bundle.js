/* @ds-bundle: {"format":4,"namespace":"AlAtharDesignSystem_1d7ae6","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"315e636cb822","components/content/Card.jsx":"5053bc6a8f1d","components/core/Badge.jsx":"2407968aa49d","components/core/Button.jsx":"398214d7a417","components/core/IconButton.jsx":"cdce1afdd93a","components/core/Logo.jsx":"388887e84ece","components/core/SectionLabel.jsx":"385e408cf533","components/feedback/Dialog.jsx":"125758734b17","components/feedback/Toast.jsx":"d82804211d63","components/forms/Checkbox.jsx":"d435e1b23ea0","components/forms/Input.jsx":"fad314228480","components/forms/Radio.jsx":"5d36afd6f38c","components/forms/Select.jsx":"08343e767a98","components/forms/Switch.jsx":"e0be1291e10e","components/forms/Textarea.jsx":"83d5554d5203","ui_kits/website/ConvertSections.jsx":"74383a758ddc","ui_kits/website/HeroSections.jsx":"34e93efc6736","ui_kits/website/ProofSections.jsx":"9dc0cb9b3d6b","ui_kits/website/ServiceSections.jsx":"251ee60fb19a","ui_kits/website/SiteChrome.jsx":"9e88f85051b1"},"inlinedExternals":[],"unexposedExports":[{"name":"controlStyle","sourcePath":"components/forms/Input.jsx"},{"name":"fieldLabelStyle","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.AlAtharDesignSystem_1d7ae6 = window.AlAtharDesignSystem_1d7ae6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
const {
  useState
} = React;
function Item({
  q,
  a,
  open,
  onToggle,
  inverse
}) {
  const [hover, setHover] = useState(false);
  const line = inverse ? 'var(--border-on-dark)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${line}`
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-expanded": open,
    style: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '22px 4px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-ui)',
      fontSize: '17px',
      fontWeight: 600,
      color: inverse ? 'var(--white)' : hover || open ? 'var(--tip-teal)' : 'var(--ink)',
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: inverse ? 'var(--aqua)' : 'var(--tip-teal)',
    strokeWidth: "1.5",
    strokeLinecap: "round",
    style: {
      flexShrink: 0,
      transform: open ? 'rotate(45deg)' : 'none',
      transition: 'transform var(--duration-medium) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      transition: 'grid-template-rows var(--duration-medium) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 22px',
      padding: '0 4px',
      maxWidth: '62ch',
      fontFamily: 'var(--font-body)',
      fontSize: '15.5px',
      lineHeight: 1.65,
      color: inverse ? 'var(--text-on-dark-secondary)' : 'var(--text-body)'
    }
  }, a))));
}
function Accordion({
  items = [],
  defaultOpen = -1,
  inverse = false,
  style
}) {
  const [openIdx, setOpenIdx] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${inverse ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Item, {
    key: i,
    q: it.q,
    a: it.a,
    inverse: inverse,
    open: openIdx === i,
    onToggle: () => setOpenIdx(openIdx === i ? -1 : i)
  })));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
const {
  useState
} = React;
function Card({
  tint = 'white',
  hoverable = false,
  media,
  mediaAlt = '',
  mediaHeight = 200,
  padding = 28,
  style,
  children
}) {
  const [hover, setHover] = useState(false);
  const tints = {
    white: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    mist: {
      background: 'var(--surface-tint)',
      border: '1px solid transparent',
      color: 'var(--text-body)'
    },
    dark: {
      background: 'var(--surface-dark)',
      border: '1px solid transparent',
      color: 'var(--text-on-dark-secondary)'
    }
  };
  const t = tints[tint] || tints.white;
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: hoverable && hover ? 'var(--shadow-card-hover)' : tint === 'white' ? 'var(--shadow-card)' : 'none',
      transition: 'box-shadow var(--duration-medium) var(--ease-standard), transform var(--duration-medium) var(--ease-standard)',
      transform: hoverable && hover ? 'translateY(-2px)' : 'none',
      ...t,
      ...style
    }
  }, media && /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: mediaAlt,
    style: {
      display: 'block',
      width: '100%',
      height: mediaHeight,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'blue',
  children,
  style
}) {
  const tones = {
    blue: {
      background: 'var(--aqua-tint)',
      color: 'var(--tip-teal)',
      border: '1px solid transparent'
    },
    neutral: {
      background: 'var(--mist)',
      color: 'var(--slate)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-subtle)'
    },
    dark: {
      background: 'var(--ink-soft)',
      color: 'var(--text-on-dark-secondary)',
      border: '1px solid transparent'
    }
  };
  const t = tones[tone] || tones.blue;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 13px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  lg: {
    height: 'var(--control-height-lg, 56px)',
    padding: '0 34px',
    fontSize: '16px'
  },
  md: {
    height: 'var(--control-height-md, 48px)',
    padding: '0 28px',
    fontSize: '15px'
  },
  sm: {
    height: 'var(--control-height-sm, 40px)',
    padding: '0 20px',
    fontSize: '14px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  inverse = false,
  icon = null,
  href,
  onClick,
  disabled = false,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const palettes = {
    primary: inverse ? {
      bg: hover ? 'var(--mist)' : 'var(--white)',
      color: 'var(--tip-teal)',
      border: '1px solid transparent'
    } : {
      bg: hover ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      color: 'var(--white)',
      border: '1px solid transparent'
    },
    mint: {
      bg: hover ? 'var(--action-mint-hover)' : 'var(--action-mint)',
      color: 'var(--text-on-mint)',
      border: '1px solid transparent'
    },
    secondary: inverse ? {
      bg: 'transparent',
      color: 'var(--white)',
      border: `1px solid ${hover ? 'rgba(255,255,255,0.5)' : 'var(--border-on-dark)'}`
    } : {
      bg: 'transparent',
      color: 'var(--ink)',
      border: `1px solid ${hover ? 'var(--ink)' : 'var(--border-strong)'}`
    },
    ghost: {
      bg: 'transparent',
      color: inverse ? hover ? 'var(--white)' : 'var(--aqua)' : hover ? 'var(--action-primary-hover)' : 'var(--tip-teal)',
      border: '1px solid transparent'
    }
  };
  const p = palettes[variant] || palettes.primary;
  const css = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    height: s.height,
    padding: variant === 'ghost' ? '0 4px' : s.padding,
    fontFamily: 'var(--font-ui)',
    fontWeight: 600,
    fontSize: s.fontSize,
    letterSpacing: '0.01em',
    color: p.color,
    background: p.bg,
    border: p.border,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
    ...style
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon, /*#__PURE__*/React.createElement("span", null, children));
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick
  };
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: disabled ? undefined : href,
      style: css
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: css
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function IconButton({
  label,
  inverse = false,
  size = 44,
  href,
  onClick,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const css = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    borderRadius: 'var(--radius-pill)',
    border: inverse ? `1px solid ${hover ? 'rgba(255,255,255,0.5)' : 'var(--border-on-dark)'}` : `1px solid ${hover ? 'var(--border-strong)' : 'var(--border-subtle)'}`,
    background: inverse ? 'transparent' : hover ? 'var(--mist)' : 'var(--white)',
    color: inverse ? 'var(--white)' : 'var(--ink)',
    cursor: 'pointer',
    transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
    textDecoration: 'none',
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick
  };
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    "aria-label": label,
    style: css
  }, handlers, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    style: css
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
/* Wordmark. The supplied "tip top fm" artwork IS the logo: exact shapes, exact colours,
   never redrawn, recoloured or stretched. On dark surfaces only the grey "tip" flips to white. */
const MARK_RATIO = 1218 / 525;
function Wordmark({
  height,
  darkColor
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "142.5 515 1218 525",
    height: height,
    width: height * MARK_RATIO,
    role: "img",
    "aria-label": "tip top fm",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "59fbe8caf5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    width: "552",
    y: "0",
    height: "602"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "b35b8d9203"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    width: "617",
    y: "0",
    height: "690"
  }))), /*#__PURE__*/React.createElement("g", {
    transform: "matrix(1, 0, 0, 1, 127, 388)"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#59fbe8caf5)"
  }, /*#__PURE__*/React.createElement("g", {
    fill: darkColor,
    fillOpacity: "1"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(5.614519, 470.137814)"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M 125.1875 -163.390625 L 125.1875 0 L 50.28125 0 L 50.28125 -163.390625 L 10.0625 -163.390625 L 10.0625 -221.703125 L 50.28125 -221.703125 L 50.28125 -306.171875 L 125.1875 -306.171875 L 125.1875 -221.703125 L 165.40625 -221.703125 L 165.40625 -163.390625 Z M 125.1875 -163.390625 "
  })))), /*#__PURE__*/React.createElement("g", {
    fill: darkColor,
    fillOpacity: "1"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(145.858281, 470.137814)"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M 26.140625 -297.625 C 26.140625 -310.019531 30.410156 -320.488281 38.953125 -329.03125 C 47.503906 -337.582031 57.984375 -341.859375 70.390625 -341.859375 C 82.453125 -341.859375 92.835938 -337.582031 101.546875 -329.03125 C 110.265625 -320.488281 114.625 -310.019531 114.625 -297.625 C 114.625 -285.550781 110.265625 -275.15625 101.546875 -266.4375 C 92.835938 -257.726562 82.453125 -253.375 70.390625 -253.375 C 57.984375 -253.375 47.503906 -257.726562 38.953125 -266.4375 C 30.410156 -275.15625 26.140625 -285.550781 26.140625 -297.625 Z M 108.09375 0 L 32.671875 0 L 32.671875 -221.703125 L 108.09375 -221.703125 Z M 108.09375 0 "
  })))), /*#__PURE__*/React.createElement("g", {
    fill: darkColor,
    fillOpacity: "1"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(251.417183, 470.137814)"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M 105.578125 -110.609375 C 105.578125 -100.878906 107.921875 -91.828125 112.609375 -83.453125 C 117.304688 -75.078125 123.59375 -68.289062 131.46875 -63.09375 C 139.34375 -57.894531 148.304688 -55.296875 158.359375 -55.296875 C 168.410156 -55.296875 177.375 -57.894531 185.25 -63.09375 C 193.132812 -68.289062 199.421875 -75.078125 204.109375 -83.453125 C 208.804688 -91.828125 211.15625 -100.878906 211.15625 -110.609375 C 211.15625 -120.328125 208.804688 -129.375 204.109375 -137.75 C 199.421875 -146.125 193.132812 -152.910156 185.25 -158.109375 C 177.375 -163.304688 168.410156 -165.90625 158.359375 -165.90625 C 148.304688 -165.90625 139.34375 -163.304688 131.46875 -158.109375 C 123.59375 -152.910156 117.304688 -146.125 112.609375 -137.75 C 107.921875 -129.375 105.578125 -120.328125 105.578125 -110.609375 Z M 105.578125 125.6875 L 30.171875 125.6875 L 30.171875 -221.703125 L 105.578125 -221.703125 L 105.578125 -194.5625 C 115.296875 -206.625 126.773438 -215 140.015625 -219.6875 C 153.253906 -224.382812 167.078125 -226.734375 181.484375 -226.734375 C 202.597656 -226.734375 221.453125 -221.285156 238.046875 -210.390625 C 254.640625 -199.503906 267.710938 -185.257812 277.265625 -167.65625 C 286.816406 -150.0625 291.59375 -131.046875 291.59375 -110.609375 C 291.59375 -90.160156 286.816406 -71.132812 277.265625 -53.53125 C 267.710938 -35.9375 254.640625 -21.773438 238.046875 -11.046875 C 221.453125 -0.328125 202.597656 5.03125 181.484375 5.03125 C 167.078125 5.03125 152.75 2.601562 138.5 -2.25 C 124.257812 -7.113281 113.285156 -15.242188 105.578125 -26.640625 Z M 105.578125 125.6875 "
  })))))), /*#__PURE__*/React.createElement("g", {
    transform: "matrix(1, 0, 0, 1, 690, 452)"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#b35b8d9203)"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "#77c8bf",
    fillOpacity: "1"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(1.561878, 405.029691)"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M 81.09375 -119.203125 C 80.007812 -95.953125 81.359375 -75.472656 85.140625 -57.765625 C 88.921875 -40.066406 96.757812 -25.335938 108.65625 -13.578125 C 120.550781 -1.828125 137.847656 7.019531 160.546875 12.96875 L 160.546875 103.390625 C 130.003906 99.335938 104.664062 90.28125 84.53125 76.21875 C 64.394531 62.164062 48.851562 43.921875 37.90625 21.484375 C 26.957031 -0.941406 19.859375 -26.613281 16.609375 -55.53125 C 13.367188 -84.457031 13.238281 -115.953125 16.21875 -150.015625 C 17.03125 -159.472656 18.378906 -170.144531 20.265625 -182.03125 C 22.160156 -193.925781 24.457031 -206.160156 27.15625 -218.734375 C 29.863281 -231.304688 32.972656 -243.265625 36.484375 -254.609375 C 40.003906 -265.960938 43.65625 -275.695312 47.4375 -283.8125 L 119.609375 -283.8125 C 112.847656 -270.019531 106.492188 -253.597656 100.546875 -234.546875 C 94.597656 -215.492188 90.140625 -196.910156 87.171875 -178.796875 C 96.359375 -178.796875 105.070312 -178.726562 113.3125 -178.59375 C 121.5625 -178.457031 128.457031 -178.320312 134 -178.1875 C 139.539062 -178.050781 142.71875 -177.710938 143.53125 -177.171875 L 143.53125 -119.203125 C 143.257812 -119.203125 142.71875 -119.269531 141.90625 -119.40625 C 141.09375 -119.539062 138.789062 -119.609375 135 -119.609375 C 131.21875 -119.609375 125.140625 -119.539062 116.765625 -119.40625 C 108.390625 -119.269531 96.5 -119.203125 81.09375 -119.203125 Z M 81.09375 -119.203125 "
  })))), /*#__PURE__*/React.createElement("g", {
    fill: "#77c8bf",
    fillOpacity: "1"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(145.892969, 405.029691)"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M 214.078125 -90.8125 C 214.078125 -75.132812 209.679688 -60.335938 200.890625 -46.421875 C 192.109375 -32.503906 180.082031 -21.21875 164.8125 -12.5625 C 149.539062 -3.914062 132.039062 0.539062 112.3125 0.8125 C 112.039062 0.8125 111.835938 0.675781 111.703125 0.40625 C 111.566406 0.132812 111.5 0 111.5 0 C 111.226562 0 111.09375 0.132812 111.09375 0.40625 C 111.09375 0.675781 111.09375 0.8125 111.09375 0.8125 C 98.113281 0.8125 85.472656 -1.414062 73.171875 -5.875 C 60.878906 -10.332031 49.867188 -16.613281 40.140625 -24.71875 C 30.410156 -32.832031 22.640625 -42.5 16.828125 -53.71875 C 11.015625 -64.9375 8.109375 -77.300781 8.109375 -90.8125 C 8.109375 -107.03125 12.566406 -121.960938 21.484375 -135.609375 C 30.410156 -149.265625 42.644531 -160.210938 58.1875 -168.453125 C 73.726562 -176.703125 91.363281 -180.828125 111.09375 -180.828125 L 111.5 -180.828125 C 111.5 -180.828125 111.632812 -180.828125 111.90625 -180.828125 C 112.175781 -180.828125 112.3125 -180.828125 112.3125 -180.828125 C 130.957031 -180.828125 147.984375 -176.90625 163.390625 -169.0625 C 178.796875 -161.226562 191.09375 -150.550781 200.28125 -137.03125 C 209.476562 -123.519531 214.078125 -108.113281 214.078125 -90.8125 Z M 111.5 -57.578125 C 123.382812 -57.578125 132.707031 -60.613281 139.46875 -66.6875 C 146.226562 -72.769531 149.742188 -80.8125 150.015625 -90.8125 C 150.015625 -100.28125 146.566406 -107.984375 139.671875 -113.921875 C 132.773438 -119.867188 123.382812 -122.84375 111.5 -122.84375 C 99.601562 -122.84375 90.140625 -119.867188 83.109375 -113.921875 C 76.085938 -107.984375 72.578125 -100.28125 72.578125 -90.8125 C 72.578125 -81.082031 76.085938 -73.109375 83.109375 -66.890625 C 90.140625 -60.679688 99.601562 -57.578125 111.5 -57.578125 Z M 111.5 -57.578125 "
  })))), /*#__PURE__*/React.createElement("g", {
    fill: "#77c8bf",
    fillOpacity: "1"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(371.308935, 405.029691)"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M 237.1875 -107.03125 C 237.71875 -104.875 237.984375 -102.710938 237.984375 -100.546875 C 237.984375 -98.390625 237.984375 -96.226562 237.984375 -94.0625 C 237.984375 -75.945312 233.1875 -59.796875 223.59375 -45.609375 C 214 -31.421875 201.226562 -20.203125 185.28125 -11.953125 C 169.332031 -3.710938 151.765625 0.40625 132.578125 0.40625 C 101.765625 0.40625 74.195312 -10.269531 49.875 -31.625 C 46.894531 -23.25 44.660156 -14.53125 43.171875 -5.46875 C 41.691406 3.582031 40.953125 12.703125 40.953125 21.890625 C 40.953125 38.921875 43.25 55.945312 47.84375 72.96875 C 52.4375 90 58.921875 106.015625 67.296875 121.015625 C 75.679688 136.023438 85.28125 149.335938 96.09375 160.953125 L -1.625 160.953125 C -10.8125 143.390625 -17.296875 125.210938 -21.078125 106.421875 C -24.867188 87.640625 -26.765625 69.191406 -26.765625 51.078125 C -26.765625 31.890625 -25.140625 13.511719 -21.890625 -4.046875 C -18.648438 -21.617188 -14.328125 -37.769531 -8.921875 -52.5 C -3.515625 -67.226562 2.160156 -79.726562 8.109375 -90 C 2.703125 -102.4375 -1.753906 -116.019531 -5.265625 -130.75 C -8.785156 -145.476562 -11.21875 -161.359375 -12.5625 -178.390625 L 57.578125 -174.34375 C 59.191406 -161.632812 62.632812 -148.382812 67.90625 -134.59375 C 73.175781 -120.8125 79.660156 -107.972656 87.359375 -96.078125 C 95.066406 -84.191406 103.445312 -74.597656 112.5 -67.296875 C 121.5625 -60.003906 130.820312 -56.359375 140.28125 -56.359375 C 149.738281 -56.359375 158.519531 -59.53125 166.625 -65.875 C 174.738281 -72.226562 178.796875 -80.40625 178.796875 -90.40625 C 178.796875 -99.601562 175.890625 -106.972656 170.078125 -112.515625 C 164.265625 -118.054688 156.628906 -120.828125 147.171875 -120.828125 C 139.335938 -120.828125 130.890625 -118.863281 121.828125 -114.9375 C 112.773438 -111.019531 104.332031 -105.410156 96.5 -98.109375 C 91.363281 -105.410156 86.765625 -113.585938 82.703125 -122.640625 C 78.648438 -131.703125 75.546875 -141.367188 73.390625 -151.640625 C 85.273438 -159.203125 97.835938 -165.414062 111.078125 -170.28125 C 124.328125 -175.144531 137.171875 -177.578125 149.609375 -177.578125 C 164.742188 -177.578125 178.523438 -174.535156 190.953125 -168.453125 C 203.390625 -162.378906 213.726562 -154.003906 221.96875 -143.328125 C 230.21875 -132.648438 235.289062 -120.550781 237.1875 -107.03125 Z M 237.1875 -107.03125 "
  })))), /*#__PURE__*/React.createElement("g", {
    fill: "#77c8bf",
    fillOpacity: "1"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(614.581039, 405.029691)"
  }, /*#__PURE__*/React.createElement("g", null))))), /*#__PURE__*/React.createElement("path", {
    fill: "#f581c7",
    d: "M 1175.949219 906.179688 L 1359.035156 906.179688 L 1359.035156 1038.898438 L 1175.949219 1038.898438 L 1175.949219 906.179688 ",
    fillOpacity: "1",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#ffffff",
    fillOpacity: "1"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(1211.172705, 1001.038958)"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M 24.421875 -60.296875 C 26.691406 -60.296875 28.679688 -60.0625 30.390625 -59.59375 C 32.109375 -59.125 33.382812 -58.585938 34.21875 -57.984375 L 32.8125 -49.171875 C 32.195312 -49.554688 31.5 -49.859375 30.71875 -50.078125 C 29.945312 -50.304688 28.984375 -50.421875 27.828125 -50.421875 C 25.890625 -50.421875 24.296875 -49.976562 23.046875 -49.09375 C 21.804688 -48.207031 21.1875 -46.65625 21.1875 -44.4375 L 21.1875 -39.046875 L 22.015625 -36.71875 L 22.015625 0 L 7.890625 0 L 7.890625 -45.359375 C 7.890625 -48.015625 8.316406 -50.28125 9.171875 -52.15625 C 10.035156 -54.039062 11.242188 -55.59375 12.796875 -56.8125 C 14.347656 -58.03125 16.117188 -58.914062 18.109375 -59.46875 C 20.097656 -60.019531 22.203125 -60.296875 24.421875 -60.296875 Z M 33.8125 -41.53125 L 33.8125 -31.484375 L 1.25 -31.484375 L 1.25 -41.53125 Z M 33.8125 -41.53125 "
  })))), /*#__PURE__*/React.createElement("g", {
    fill: "#ffffff",
    fillOpacity: "1"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(1245.643622, 1001.038958)"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M 5.0625 0 L 5.0625 -41.53125 L 17.6875 -41.53125 L 18.109375 -33.46875 C 19.429688 -36.40625 21.296875 -38.617188 23.703125 -40.109375 C 26.117188 -41.609375 28.90625 -42.359375 32.0625 -42.359375 C 35.164062 -42.359375 37.851562 -41.664062 40.125 -40.28125 C 42.394531 -38.894531 44.082031 -36.847656 45.1875 -34.140625 C 46.070312 -35.960938 47.21875 -37.484375 48.625 -38.703125 C 50.039062 -39.921875 51.660156 -40.832031 53.484375 -41.4375 C 55.316406 -42.050781 57.203125 -42.359375 59.140625 -42.359375 C 61.910156 -42.359375 64.347656 -41.816406 66.453125 -40.734375 C 68.554688 -39.660156 70.226562 -38.03125 71.46875 -35.84375 C 72.71875 -33.65625 73.34375 -30.925781 73.34375 -27.65625 L 73.34375 0 L 59.21875 0 L 59.21875 -24.421875 C 59.21875 -27.078125 58.707031 -28.929688 57.6875 -29.984375 C 56.664062 -31.035156 55.296875 -31.5625 53.578125 -31.5625 C 52.191406 -31.5625 50.929688 -31.210938 49.796875 -30.515625 C 48.660156 -29.828125 47.785156 -28.789062 47.171875 -27.40625 C 46.566406 -26.019531 46.265625 -24.273438 46.265625 -22.171875 L 46.265625 0 L 32.140625 0 L 32.140625 -24.421875 C 32.140625 -27.078125 31.613281 -28.929688 30.5625 -29.984375 C 29.507812 -31.035156 28.15625 -31.5625 26.5 -31.5625 C 25.226562 -31.5625 24.023438 -31.226562 22.890625 -30.5625 C 21.753906 -29.894531 20.851562 -28.851562 20.1875 -27.4375 C 19.519531 -26.03125 19.1875 -24.191406 19.1875 -21.921875 L 19.1875 0 Z M 5.0625 0 "
  })))));
}
function Logo({
  inverse = false,
  compact = false,
  size = 'md',
  href,
  style
}) {
  const scale = size === 'lg' ? 1.5 : size === 'sm' ? 0.78 : 1;
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 9 * scale,
      textDecoration: 'none',
      lineHeight: 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    height: 26 * scale,
    darkColor: inverse ? '#ffffff' : '#3f3e3f'
  }), !compact && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 8.5 * scale,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: inverse ? 'var(--text-on-dark-secondary)' : 'var(--slate)'
    }
  }, "Cleaning & Pet Care \xB7 Sharjah"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function SectionLabel({
  inverse = false,
  as = 'div',
  children,
  style
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      display: 'block',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-label, 12.5px)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-label, 0.18em)',
      textTransform: 'uppercase',
      color: inverse ? 'var(--aqua)' : 'var(--text-label)',
      margin: 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const {
  useEffect
} = React;
function Dialog({
  open = false,
  onClose,
  title,
  footer,
  maxWidth = 520,
  children
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(35, 31, 32, 0.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-dialog)',
      width: '100%',
      maxWidth,
      maxHeight: '86vh',
      overflow: 'auto',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '24px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: '1px solid var(--border-subtle)',
      background: 'var(--white)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 28px 28px',
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      padding: '0 28px 28px'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  visible = false,
  message,
  detail,
  position = 'bottom',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    style: {
      position: 'fixed',
      left: '50%',
      zIndex: 1100,
      [position === 'top' ? 'top' : 'bottom']: 24,
      transform: `translateX(-50%) translateY(${visible ? 0 : position === 'top' ? '-12px' : '12px'})`,
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none',
      transition: 'opacity var(--duration-medium) var(--ease-standard), transform var(--duration-medium) var(--ease-standard)',
      background: 'var(--ink)',
      color: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-dialog)',
      padding: '14px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      maxWidth: 420,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14.5
    }
  }, message), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-on-dark-secondary)'
    }
  }, detail));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '11px',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--text-body)',
      minHeight: '28px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      boxSizing: 'border-box',
      borderRadius: '5px',
      flexShrink: 0,
      border: `1px solid ${checked ? 'var(--tip-teal)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--tip-teal)' : 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function fieldLabelStyle() {
  return {
    display: 'block',
    fontFamily: 'var(--font-ui)',
    fontSize: '13.5px',
    fontWeight: 600,
    color: 'var(--ink)',
    marginBottom: '8px'
  };
}
function controlStyle(focus, error) {
  return {
    width: '100%',
    boxSizing: 'border-box',
    height: 'var(--control-height-md, 48px)',
    padding: '0 16px',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--ink)',
    background: 'var(--white)',
    border: `1px solid ${error ? 'var(--negative)' : focus ? 'var(--mid-teal)' : 'var(--border-strong)'}`,
    borderRadius: 'var(--radius-sm)',
    outline: 'none',
    boxShadow: focus ? 'var(--focus-ring)' : 'none',
    transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
  };
}
function Input({
  label,
  hint,
  error,
  type = 'text',
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: fieldLabelStyle()
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...controlStyle(focus, !!error),
      ...inputStyle
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '6px',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: error ? 'var(--negative)' : 'var(--text-secondary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { fieldLabelStyle, controlStyle, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  name,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '11px',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--text-body)',
      minHeight: '28px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      boxSizing: 'border-box',
      borderRadius: '50%',
      flexShrink: 0,
      border: `1px solid ${checked ? 'var(--tip-teal)' : 'var(--border-strong)'}`,
      background: 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--tip-teal)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  value,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.fieldLabelStyle()
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.controlStyle(focus, !!error),
      appearance: 'none',
      WebkitAppearance: 'none',
      paddingRight: '40px',
      color: value === undefined || value === '' ? 'var(--slate)' : 'var(--ink)',
      cursor: 'pointer'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--slate)",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '6px',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: error ? 'var(--negative)' : 'var(--text-secondary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--text-body)',
      minHeight: '28px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 44,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      flexShrink: 0,
      boxSizing: 'border-box',
      background: checked ? 'var(--tip-teal)' : 'var(--border-strong)',
      padding: 2,
      display: 'inline-flex',
      justifyContent: checked ? 'flex-end' : 'flex-start',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: '0 1px 2px rgba(35,31,32,0.2)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.fieldLabelStyle()
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.controlStyle(focus, !!error),
      height: 'auto',
      minHeight: '96px',
      padding: '13px 16px',
      lineHeight: 1.6,
      resize: 'vertical',
      ...inputStyle
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '6px',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: error ? 'var(--negative)' : 'var(--text-secondary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ConvertSections.jsx
try { (() => {
/* Tip Top website: assessment form, coverage, FAQ, final CTA. */
const {
  Button: ACButton,
  SectionLabel: ACLabel,
  Badge: ACBadge,
  Input: ACInput,
  Select: ACSelect,
  Textarea: ACTextarea,
  Accordion: ACAccordion,
  Toast: ACToast
} = (k => window[k] || {})(Object.keys(window).find(x => /DesignSystem_/.test(x)));
function Assessment() {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [type, setType] = React.useState('');
  const [service, setService] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const submit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3200);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "assessment",
    "data-screen-label": "Assessment",
    style: {
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sectionpad) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-assess-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 80,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ACLabel, {
    inverse: true,
    as: "p"
  }, "Free Assessment"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(34px, 3.6vw, 50px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.3,
      color: 'var(--white)',
      margin: '24px 0 0'
    }
  }, "Start with a walkthrough,", /*#__PURE__*/React.createElement("br", null), "not a price list."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16.5,
      lineHeight: 1.7,
      color: 'var(--text-on-dark-secondary)',
      margin: '26px 0 0',
      maxWidth: '46ch'
    }
  }, "A quick, no-obligation assessment of your space, followed by a tailored cleaning plan with clear, upfront pricing. No surprises on the day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      marginTop: 32
    }
  }, ['Free on-site or photo-based assessment', 'Tailored plan and exact quote before we start', 'Same-week booking, Mon–Sat 8AM–6PM'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 16,
    color: "var(--aqua)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      color: 'var(--white)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginTop: 44,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(ACButton, {
    variant: "mint",
    size: "lg",
    href: WA_URL,
    icon: /*#__PURE__*/React.createElement(WaIcon, {
      size: 18
    })
  }, "Speak With Our Team"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-on-dark-secondary)'
    }
  }, "or send the form and we reply on WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '18px 18px'
    }
  }, /*#__PURE__*/React.createElement(ACInput, {
    label: "Full name",
    placeholder: "Your name",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(ACInput, {
    label: "Phone (WhatsApp)",
    placeholder: "+971 \u2026",
    value: phone,
    onChange: e => setPhone(e.target.value)
  }), /*#__PURE__*/React.createElement(ACSelect, {
    label: "Property type",
    placeholder: "Select\u2026",
    value: type,
    onChange: e => setType(e.target.value),
    options: ['Apartment', 'Villa', 'Townhouse', 'Office', 'Commercial space']
  }), /*#__PURE__*/React.createElement(ACSelect, {
    label: "Service",
    placeholder: "Select\u2026",
    value: service,
    onChange: e => setService(e.target.value),
    options: ['Deep cleaning', 'Move-in / move-out', 'Post-construction', 'Upholstery & carpet', 'Sanitisation', 'Office cleaning', 'Pet grooming at home', 'Pet sitting & walking']
  }), /*#__PURE__*/React.createElement(ACTextarea, {
    label: "Anything we should know?",
    placeholder: "4-bedroom villa in Al Zahia, two cats, handover on the 28th\u2026",
    rows: 3,
    style: {
      gridColumn: '1 / -1'
    },
    value: notes,
    onChange: e => setNotes(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "No obligation. We reply within the hour, Mon\u2013Sat."), /*#__PURE__*/React.createElement(ACButton, {
    variant: "mint",
    onClick: submit
  }, "Request Your Cleaning Plan"))))), /*#__PURE__*/React.createElement(ACToast, {
    visible: sent,
    message: "Request sent",
    detail: "We'll reply on WhatsApp shortly."
  }));
}
const AREAS = ['Al Majaz', 'Al Khan', 'Al Qasimia', 'Al Taawun', 'Al Nahda', 'Muwaileh', 'Al Majaz Waterfront', 'Al Zahia', 'Tilal City', 'Sharjah Garden City', 'Al Suyoh', 'Maryam Island'];
function Coverage() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Coverage",
    style: {
      background: 'var(--white)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-coverage-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '360px 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ACLabel, {
    as: "p"
  }, "Service Areas"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 30,
      letterSpacing: '-0.01em',
      lineHeight: 1.15,
      margin: '18px 0 10px'
    }
  }, "All of Sharjah, covered."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "From Al Majaz to Maryam Island, and the communities in between.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      paddingTop: 6
    }
  }, AREAS.map(a => /*#__PURE__*/React.createElement(ACBadge, {
    key: a,
    tone: "neutral",
    style: {
      fontSize: 14,
      padding: '8px 18px'
    }
  }, a)), /*#__PURE__*/React.createElement(ACBadge, {
    tone: "blue",
    style: {
      fontSize: 14,
      padding: '8px 18px'
    }
  }, "+ surrounding communities")))));
}
const FAQS = [{
  q: 'How much does deep cleaning cost in Sharjah?',
  a: 'Deep cleaning starts from around AED 199 for a studio and scales with property size: roughly AED 299–599 for a 1–2 bedroom apartment and AED 999+ for villas. Sofa, mattress, carpet and pet-odour treatment are priced per item, and grooming is priced by animal and coat. We confirm the final price after a quick assessment.'
}, {
  q: "What's included in a deep cleaning service?",
  a: 'A full top-to-bottom clean: kitchen and bathrooms descaled and sanitised, interior windows, doors, skirting and switches wiped, cabinet fronts cleaned, and detailed floor cleaning, plus dusting throughout. You can add sofa, mattress, carpet, marble polishing or AC cleaning to any booking.'
}, {
  q: 'How long does a deep clean take?',
  a: 'Most apartments take about 3–6 hours depending on size and condition; larger villas can take most of a day. We send a team sized to your property so the job is completed in a single visit.'
}, {
  q: 'Do you offer move-in, move-out and post-construction cleaning?',
  a: 'Yes. We handle move-in and move-out deep cleans and post-construction or post-renovation cleaning: dust and debris removal, paint and grout cleanup, and full sanitisation before handover.'
}, {
  q: 'Are your cleaning products safe for children and pets?',
  a: 'Yes. Low-odour, non-toxic products are our default, not an upgrade. We work in pet homes every day, so nothing we use is left where an animal can reach it.'
}, {
  q: 'What pet care services do you offer?',
  a: 'Grooming at home (bath, brush, nail trim, ear care), pet sitting with feeding and medication, and daily walks for dogs, cats and small animals. You get a photo update after every visit. We ask that pets are vaccinated.'
}, {
  q: 'Can you clean and look after my pets in the same visit?',
  a: "Yes, and it's the most common booking we take. One team, one price, one visit: the home deep cleaned and de-odourised while your pets are groomed or kept calm out of the way."
}, {
  q: 'How do I book Tip Top?',
  a: "Message us on WhatsApp at +971 52 751 5144 or send the assessment form above. We'll confirm your time slot and the final price after a short assessment. Hours: Mon–Sat, 8AM–6PM."
}];
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    "data-screen-label": "FAQ",
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sectionpad) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-faq-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '360px 1fr',
      gap: 72,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 108
    }
  }, /*#__PURE__*/React.createElement(ACLabel, {
    as: "p"
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(30px, 3vw, 40px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      margin: '20px 0 16px'
    }
  }, "Straight answers."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      margin: 0,
      maxWidth: '32ch'
    }
  }, "Pricing, inclusions, pet care and booking. If anything's unclear, just ask us on WhatsApp.")), /*#__PURE__*/React.createElement(ACAccordion, {
    defaultOpen: 0,
    items: FAQS
  }))));
}
Object.assign(window, {
  Assessment,
  Coverage,
  Faq
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ConvertSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroSections.jsx
try { (() => {
/* Tip Top website: Hero, trust indicators, positioning. */
const {
  Button: AAButton,
  SectionLabel: AALabel
} = (k => window[k] || {})(Object.keys(window).find(x => /DesignSystem_/.test(x)));
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    "data-screen-label": "Hero",
    style: {
      background: 'var(--white)',
      paddingTop: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-hero-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)',
      alignItems: 'stretch',
      maxWidth: 1600,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(56px, 11vw, 96px) clamp(20px, 5vw, 64px) clamp(56px, 11vw, 96px) max(var(--gutter), calc((100vw - var(--container-max)) / 2))'
    }
  }, /*#__PURE__*/React.createElement(AALabel, {
    as: "p"
  }, "Cleaning & Pet Care in Sharjah"), /*#__PURE__*/React.createElement("h1", {
    className: "aa-hero-h1",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 550,
      fontSize: 'clamp(36px, 2.1rem + 2.4vw, 72px)',
      lineHeight: 1.12,
      letterSpacing: '-0.025em',
      color: 'var(--ink)',
      margin: '28px 0 0',
      textWrap: 'balance',
      maxWidth: '19ch'
    }
  }, "Your home in tip-top condition. Your pets too."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      maxWidth: '46ch',
      margin: '28px 0 0'
    }
  }, "Meticulous deep cleaning for Sharjah homes, villas and workplaces, plus gentle grooming, sitting and walking for the animals who live in them."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(AAButton, {
    variant: "mint",
    size: "lg",
    href: "#assessment"
  }, "Book a Cleaning Assessment"), /*#__PURE__*/React.createElement(AAButton, {
    variant: "secondary",
    size: "lg",
    href: "#pets"
  }, "See Pet Care")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      margin: '26px 0 0'
    }
  }, "Free on-site assessment \xB7 We reply fast on WhatsApp")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/brand-hero-cleaner.png",
    alt: "A Tip Top cleaner smoothing a throw in a pristine sunlit Sharjah living room",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))));
}
const TRUST_STATS = [['1,000+', 'homes cleaned across Sharjah'], ['4.9', 'client rating ★★★★★'], ['400+', 'pets groomed and cared for'], ['7 days', 'available every week']];
function TrustBar() {
  return /*#__PURE__*/React.createElement("section", {
    "aria-label": "Trust indicators",
    style: {
      background: 'var(--white)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-trust-grid",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  }, TRUST_STATS.map(([num, label], i) => /*#__PURE__*/React.createElement("div", {
    key: num,
    style: {
      padding: '30px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      borderLeft: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 30,
      letterSpacing: '-0.01em',
      color: 'var(--ink)'
    }
  }, num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-secondary)'
    }
  }, label)))));
}
function Positioning() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Positioning",
    style: {
      background: 'var(--mist)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sectionpad) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-pos-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 72,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AALabel, {
    as: "p"
  }, "Protect More Than Appearance"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px, 3.4vw, 48px)',
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      margin: '24px 0 0',
      textWrap: 'balance'
    }
  }, "Most cleaners make a space look clean.", /*#__PURE__*/React.createElement("br", null), "We make a home genuinely cared for.")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "In Sharjah, \"clean\" too often means cosmetic: surfaces look tidy but aren't truly hygienic, and homes with animals get the worst of it. Tip Top holds one standard for the whole home: verifiably hygienic, dependably delivered, safe for every pair of paws in it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 28
    }
  }, ["Your family's health", 'Your home and its value', 'Your pets, groomed and looked after', 'Your peace of mind'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--ink)'
    }
  }, t))))))));
}
Object.assign(window, {
  Hero,
  TrustBar,
  Positioning
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProofSections.jsx
try { (() => {
/* Tip Top website: Projects (before/after), process, standards, testimonials. */
const {
  Button: APButton,
  SectionLabel: APLabel
} = (k => window[k] || {})(Object.keys(window).find(x => /DesignSystem_/.test(x)));

/* Interactive before/after reveal using the brand's split transformation photo. */
function BeforeAfter() {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const dragging = React.useRef(false);
  const update = clientX => {
    const r = ref.current.getBoundingClientRect();
    setPos(Math.max(4, Math.min(96, (clientX - r.left) / r.width * 100)));
  };
  React.useEffect(() => {
    const move = e => {
      if (dragging.current) update(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchend', up);
    };
  }, []);
  const tag = (text, side) => /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 20,
      [side]: 20,
      fontFamily: 'var(--font-ui)',
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '0.16em',
      pointerEvents: 'none',
      zIndex: 2,
      color: 'var(--white)',
      background: 'rgba(21,63,77,0.55)',
      padding: '6px 13px',
      borderRadius: 'var(--radius-pill)'
    }
  }, text);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseDown: e => {
      dragging.current = true;
      update(e.clientX);
    },
    onTouchStart: e => {
      dragging.current = true;
      update(e.touches[0].clientX);
    },
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      height: 520,
      cursor: 'ew-resize',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/brand-after-living-room.jpg",
    alt: "Sharjah living room after the Tip Top deep clean",
    draggable: "false",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: `${pos}%`,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/brand-before-living-room.jpg",
    alt: "The same living room before cleaning",
    draggable: "false",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: `${10000 / pos}%`,
      maxWidth: 'none',
      objectFit: 'cover'
    }
  })), tag('BEFORE', 'left'), tag('AFTER', 'right'), /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => {
      dragging.current = true;
      update(e.clientX);
    },
    onTouchStart: e => {
      dragging.current = true;
      update(e.touches[0].clientX);
    },
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: `${pos}%`,
      width: 2,
      background: 'var(--white)',
      boxShadow: '0 0 12px rgba(21,63,77,0.35)',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 3,
      boxShadow: 'var(--shadow-card-hover)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--tip-teal)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 3 12 9 6"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "15 6 21 12 15 18"
  })))));
}
const PROJECTS = [['Al Majaz Villa', 'Deep Clean · Al Majaz'], ['Al Taawun Office', 'Commercial · Al Taawun'], ['Al Khan Residence', 'Post-Construction · Al Khan'], ['Muwaileh Apartment', 'Move-In & Pet Home · Muwaileh']];
function Projects() {
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    "data-screen-label": "Before and After",
    style: {
      background: 'var(--white)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sectionpad) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-projects-head",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      marginBottom: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(APLabel, {
    as: "p"
  }, "Before & After"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px, 3.4vw, 46px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      margin: '22px 0 0'
    }
  }, "See what protected", /*#__PURE__*/React.createElement("br", null), "really looks like.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      maxWidth: '38ch',
      margin: 0
    }
  }, "Drag the divider for a real transformation from a Sharjah residence.")), /*#__PURE__*/React.createElement(BeforeAfter, null), /*#__PURE__*/React.createElement("div", {
    className: "aa-projects-list",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      marginTop: 8
    }
  }, PROJECTS.map(([name, meta], i) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      padding: '24px 24px 0',
      borderLeft: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 17,
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-secondary)',
      margin: '6px 0 0'
    }
  }, meta))))));
}
const STEPS = [['01', 'Assess', 'We evaluate your space and understand exactly what needs attention.'], ['02', 'Plan', 'A tailored cleaning plan with a clear, upfront price.'], ['03', 'Execute', 'Trained teams deep clean with precision and care.'], ['04', 'Inspect', 'A thorough quality check against our room-by-room checklist.'], ['05', 'Deliver', "A spotless space handed back, re-cleaned free if anything's missed."]];
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    "data-screen-label": "Process",
    style: {
      background: 'var(--mist)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sectionpad) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(APLabel, {
    as: "p"
  }, "How We Work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px, 3.4vw, 46px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      margin: '22px 0 56px'
    }
  }, "Five steps. Every booking."), /*#__PURE__*/React.createElement("div", {
    className: "aa-process-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 36,
      borderTop: '1px solid var(--border-strong)'
    }
  }, STEPS.map(([n, title, body]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      paddingTop: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--tip-teal)'
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      margin: '12px 0 10px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: 0
    }
  }, body))))));
}
const STANDARDS = [['Verifiably hygienic', 'We sanitise and protect, not just polish. Kitchens and bathrooms descaled, high-touch points disinfected.'], ['Safe by default', 'Low-odour, non-toxic products as standard, around children, and around animals.'], ['Trained & accountable', 'Background-checked professionals, insured, working to written checklists, inspected before handover.'], ['One team for both', 'The same background-checked people clean your home and handle your pets. No strangers, no handovers.'], ['Guaranteed', "Not happy? We re-clean, free. That's the Tip Top standard."]];
function Standards() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Standards",
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sectionpad) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-standards-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 72,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(APLabel, {
    as: "p"
  }, "Hygiene, Quality & Protection"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px, 3.4vw, 44px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      margin: '22px 0 0'
    }
  }, "Standards you can hold us to."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/brand-office-team.png",
    alt: "Two uniformed Tip Top team members cleaning glass and vacuuming an office",
    style: {
      display: 'block',
      width: '100%',
      height: 300,
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, STANDARDS.map(([title, body]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'grid',
      gridTemplateColumns: '30px 1fr',
      gap: 18,
      padding: '26px 4px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 19
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      margin: '0 0 7px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: 0
    }
  }, body))))))));
}
const QUOTES = [['The team arrived on time and worked through our villa room by room, and it was genuinely spotless. The most thorough cleaning service we\'ve used in Sharjah.', 'Sara M.', 'Al Majaz'], ['Booked a deep clean before moving in. Clear upfront price, no surprises, and the apartment looked brand new.', 'James T.', 'Al Nahda'], ['They groomed both our dogs while the apartment was being deep cleaned. One visit, one invoice, so we\'ve switched to monthly.', 'Aisha R.', 'Al Zahia']];
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Testimonials",
    style: {
      background: 'var(--mist)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sectionpad) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 56,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(APLabel, {
    as: "p"
  }, "What Sharjah Clients Say"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px, 3.4vw, 46px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      margin: '22px 0 0'
    }
  }, "Trusted across the city.")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tip-teal)',
      letterSpacing: '0.1em'
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), "\u20024.9 average rating")), /*#__PURE__*/React.createElement("div", {
    className: "aa-quotes-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 48,
      borderTop: '1px solid var(--border-strong)'
    }
  }, QUOTES.map(([q, name, area]) => /*#__PURE__*/React.createElement("figure", {
    key: name,
    style: {
      margin: 0,
      paddingTop: 30
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 16.5,
      lineHeight: 1.7,
      color: 'var(--ink)'
    }
  }, "\"", q, "\""), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 20,
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, " \xB7 ", area)))))));
}
Object.assign(window, {
  Projects,
  Process,
  Standards,
  Testimonials
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProofSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceSections.jsx
try { (() => {
/* Tip Top website: Services index, pet care, Why Tip Top pillars, brand story (Ink), villa feature. */
const {
  Button: ASButton,
  SectionLabel: ASLabel,
  Badge: ASBadge
} = (k => window[k] || {})(Object.keys(window).find(x => /DesignSystem_/.test(x)));
const SERVICES = [{
  n: '01',
  title: 'Residential deep cleaning',
  desc: 'Top-to-bottom deep cleaning for homes of every size.',
  scopes: ['Villa', 'Townhouse', 'Studio', '1–4+ Bed'],
  img: '../../assets/photography/brand-kitchen-cleaner.png',
  alt: 'Cleaner wiping a marble kitchen counter'
}, {
  n: '02',
  title: 'Upholstery & specialised cleaning',
  desc: 'Deep extraction cleaning for sofas, carpets, mattresses and curtains.',
  scopes: ['Sofa', 'Carpet', 'Mattress', 'Curtain'],
  img: '../../assets/photography/brand-upholstery-tech.png',
  alt: 'A technician deep-cleaning a sofa with an extraction machine'
}, {
  n: '03',
  title: 'Office & commercial cleaning',
  desc: 'Spotless offices, retail, restaurants and commercial spaces.',
  scopes: ['Offices', 'Retail', 'Restaurants', 'Buildings'],
  img: '../../assets/photography/brand-office-team.png',
  alt: 'A Tip Top team cleaning a bright Sharjah office'
}, {
  n: '04',
  title: 'Move-in, move-out & post-construction',
  desc: 'Fresh-start cleaning for moves, handovers and renovations.',
  scopes: ['Move-In', 'Move-Out', 'Post-Construction'],
  img: '../../assets/photography/brand-move-out-clean.png',
  alt: 'A living room transformed, before and after'
}, {
  n: '05',
  title: 'Sanitisation, glass & windows',
  desc: 'Full disinfection plus streak-free glass and window cleaning.',
  scopes: ['Sanitisation', 'Glass & Window'],
  img: '../../assets/photography/brand-glass-detail.png',
  alt: 'Water droplets on a blue-white surface'
}, {
  n: '06',
  title: 'Pet grooming & home pet care',
  desc: 'Gentle grooming, sitting and walking, plus deep cleaning built for pet homes.',
  scopes: ['Grooming', 'Sitting', 'Walking', 'Odour Removal'],
  img: '../../assets/photography/brand-pet-grooming-v2.png',
  alt: 'A groomer gently brushing a relaxed golden retriever at home'
}, {
  n: '07',
  title: 'AC, pest control & building care',
  desc: 'AC duct and coil, pest control, facade, water tank and marble polishing.',
  scopes: ['AC Duct & Coil', 'Pest Control', 'Marble'],
  img: '../../assets/photography/brand-hero-living-room.png',
  alt: 'A cared-for Sharjah apartment interior'
}];
function ServiceRow({
  s,
  active,
  onEnter
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#assessment",
    onMouseEnter: onEnter,
    style: {
      display: 'grid',
      gridTemplateColumns: '56px 1fr auto',
      gap: 24,
      alignItems: 'center',
      padding: '30px 8px',
      textDecoration: 'none',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'transparent',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: active ? 'var(--tip-teal)' : 'var(--slate)',
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: '-0.01em',
      color: active ? 'var(--tip-teal)' : 'var(--ink)',
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, s.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-secondary)'
    }
  }, s.desc), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 2
    }
  }, s.scopes.map(sc => /*#__PURE__*/React.createElement(ASBadge, {
    key: sc,
    tone: "outline",
    style: {
      fontSize: 12,
      padding: '3px 10px'
    }
  }, sc)))), /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 20,
    style: {
      color: active ? 'var(--tip-teal)' : 'var(--border-strong)',
      transform: active ? 'translateX(4px)' : 'none',
      transition: 'color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)'
    }
  }));
}
function Services() {
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    "data-screen-label": "Services",
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sectionpad) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-services-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 72,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ASLabel, {
    as: "p"
  }, "What We Do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px, 3.4vw, 46px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      margin: '22px 0 40px'
    }
  }, "Cleaning and pet care,", /*#__PURE__*/React.createElement("br", null), "presented simply."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement(ServiceRow, {
    key: s.n,
    s: s,
    active: active === i,
    onEnter: () => setActive(i)
  })))), /*#__PURE__*/React.createElement("div", {
    className: "aa-services-side",
    style: {
      position: 'sticky',
      top: 108,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      height: 420,
      position: 'relative'
    }
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement("img", {
    key: s.n,
    src: s.img,
    alt: active === i ? s.alt : '',
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: active === i ? 1 : 0,
      transition: 'opacity var(--duration-slow) var(--ease-standard)'
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Every service is delivered by trained, background-checked teams, and every product we use is safe for children and animals."), /*#__PURE__*/React.createElement(ASButton, {
    variant: "ghost",
    href: "#assessment"
  }, "Request Your Cleaning Plan ", /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 16
  }))))));
}
const PILLARS = [{
  n: '01',
  title: 'Deeper than the surface',
  body: "We don't stop at tidy. We clean, sanitise and protect, removing what you can't see, so a space is genuinely healthy, not just presentable."
}, {
  n: '02',
  title: 'Dependable by design',
  body: 'On time, every time. Trained teams and clear checklists mean the same meticulous standard on every visit. No surprises, no excuses.'
}, {
  n: '03',
  title: 'Safe for paws and people',
  body: 'Low-odour, non-toxic products, careful hands and total discretion. We treat your home, your animals and your trust as if they were our own.'
}];
function WhyTipTop() {
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    "data-screen-label": "Why Tip Top",
    style: {
      background: 'var(--mist)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sectionpad) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(ASLabel, {
    as: "p"
  }, "Why Tip Top"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px, 3.4vw, 46px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      margin: '22px 0 56px',
      maxWidth: '24ch'
    }
  }, "Three commitments behind every visit."), /*#__PURE__*/React.createElement("div", {
    className: "aa-pillars-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 48,
      borderTop: '1px solid var(--border-strong)'
    }
  }, PILLARS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    style: {
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--tip-teal)'
    }
  }, p.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      margin: '14px 0 12px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: 0
    }
  }, p.body))))));
}
function Meaning() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "The Name Is The Standard",
    style: {
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sectionpad) var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    size: "lg",
    inverse: true,
    compact: true,
    style: {
      alignItems: 'center'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--aqua)',
      margin: '36px 0 0'
    }
  }, "The Name Is The Standard"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(36px, 4vw, 56px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.3,
      color: 'var(--white)',
      margin: '22px auto 0',
      maxWidth: '18ch'
    }
  }, "Tip top, top to bottom."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.75,
      color: 'var(--text-on-dark-secondary)',
      maxWidth: '52ch',
      margin: '32px auto 0'
    }
  }, /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--aqua)',
      fontStyle: 'normal'
    }
  }, "Tip top"), " means in perfect order: nothing missed, nothing left for later. We hold a Sharjah home to that standard end to end: the floors and the skirting, the kitchen and the litter tray, the family and the animals who live there.")));
}
function PetCare() {
  const POINTS = [['Daily visits', 'Feeding, fresh water, litter and medication on your schedule, with a photo update every time.'], ['Walks', 'Loose-leash walks at the cooler hours of the day, timed and logged so you know exactly what happened.'], ['Overnight and travel care', 'Company, routine and a clean, de-odourised home while you are away.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "pets",
    "data-screen-label": "Pet Care",
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sectionpad) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-pets-head",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 72,
      alignItems: 'end',
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ASLabel, {
    as: "p",
    style: {
      color: 'var(--text-accent-warm)'
    }
  }, "Pet Care"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px, 3.4vw, 46px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      margin: '22px 0 0'
    }
  }, "The other half of a", /*#__PURE__*/React.createElement("br", null), "cared-for home.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: 0,
      maxWidth: '46ch'
    }
  }, "Homes with animals need more than a clean. They need someone who understands both. The same trained, background-checked team sits with and walks your pets, and cleans the home around them with low-odour, non-toxic products.")), /*#__PURE__*/React.createElement("div", {
    className: "aa-pets-feature",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 0,
      background: 'var(--mist)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/pet-sitting-walking.png",
    alt: "A Tip Top pet carer walking two dogs on a leafy Sharjah street",
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      minHeight: 400,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '44px 46px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: '-0.01em',
      margin: 0
    }
  }, "Pet caring and walking"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: '14px 0 0'
    }
  }, "The same trained, background-checked team that cleans your home looks after your animals in it: no carriers, no kennels, no change of routine."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22,
      marginTop: 30
    }
  }, POINTS.map(([title, body]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'grid',
      gap: 6,
      paddingTop: 20,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 15,
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, body)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(ASButton, {
    variant: "mint",
    href: "#assessment"
  }, "Request Pet Care"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-secondary)'
    }
  }, "Dogs, cats and small animals \xB7 vaccinated homes only"))));
}
function VillaFeature() {
  return /*#__PURE__*/React.createElement("section", {
    id: "villa",
    "data-screen-label": "Villa Feature",
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sectionpad) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-villa-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 72,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/brand-villa-family-v2.png",
    alt: "A mother laughing with her son on a spotless villa floor",
    style: {
      display: 'block',
      width: '100%',
      height: 560,
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ASLabel, {
    as: "p"
  }, "Villas & Residences"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px, 3.4vw, 44px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      margin: '22px 0 0'
    }
  }, "Deep cleaning built around family life."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: '24px 0 0',
      maxWidth: '52ch'
    }
  }, "Villas and townhouses carry the most life: children, pets, guests, gardens. Our residential deep clean works room by room against a clear checklist: kitchens and bathrooms descaled and sanitised, interior windows and skirting wiped, floors detailed, pet areas de-odourised, and every product safe for everyone who lives there."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      margin: '30px 0 0'
    }
  }, ['Room-by-room checklist, inspected before handover', 'Low-odour, non-toxic products around children and pets', 'One visit, teams sized to your property'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      color: 'var(--ink)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 38
    }
  }, /*#__PURE__*/React.createElement(ASButton, {
    variant: "mint",
    href: "#assessment"
  }, "Get an Assessment"))))));
}
Object.assign(window, {
  Services,
  PetCare,
  WhyTipTop,
  Meaning,
  VillaFeature
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
/* Tip Top website: shared chrome: Nav, Footer, StickyWhatsApp, icons. */
const DS = (() => {
  const k = Object.keys(window).find(x => /DesignSystem_/.test(x));
  return k && window[k] || {};
})();
const {
  Button,
  IconButton,
  SectionLabel
} = DS;
const WA_URL = 'https://wa.me/971527515144';
function WaIcon({
  size = 17
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
  }));
}
function ArrowIcon({
  size = 18,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: style
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }));
}
function CheckIcon({
  size = 18,
  color = 'var(--tip-teal)'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
}

/* Uses the design-system Logo when the bundle exposes it; falls back to the same lockup inline. */
function BrandLogo({
  inverse = false,
  compact = false,
  size = 'md',
  href,
  style
}) {
  if (DS.Logo) return /*#__PURE__*/React.createElement(DS.Logo, {
    inverse: inverse,
    compact: compact,
    size: size,
    href: href,
    style: style
  });
  const scale = size === 'lg' ? 1.5 : size === 'sm' ? 0.78 : 1;
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 9 * scale,
      textDecoration: 'none',
      lineHeight: 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "tip top fm",
    style: {
      display: 'block',
      width: 26 * scale * (1218 / 525),
      height: 26 * scale
    }
  }), !compact && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 8.5 * scale,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: inverse ? 'var(--text-on-dark-secondary)' : 'var(--slate)'
    }
  }, "Cleaning & Pet Care \xB7 Sharjah"));
}

/* Site header and footer use the wordmark alone, no descriptor line. */
function LogoLockup({
  inverse = false,
  compact = true
}) {
  return /*#__PURE__*/React.createElement(BrandLogo, {
    href: "#top",
    inverse: inverse,
    compact: compact
  });
}
const NAV_LINKS = [{
  label: 'Services',
  href: '#services'
}, {
  label: 'Pet Care',
  href: '#pets'
}, {
  label: 'Why Tip Top',
  href: '#why'
}, {
  label: 'Projects',
  href: '#projects'
}, {
  label: 'Process',
  href: '#process'
}, {
  label: 'FAQ',
  href: '#faq'
}];
function NavLink({
  href,
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 14.5,
      color: hover ? 'var(--tip-teal)' : 'var(--ink)',
      textDecoration: 'none',
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, children);
}
function BurgerButton({
  open,
  onClick
}) {
  const bar = {
    display: 'block',
    width: 20,
    height: 1.5,
    background: 'var(--ink)',
    borderRadius: 2,
    transition: 'transform var(--duration-fast) var(--ease-standard), opacity var(--duration-fast) var(--ease-standard)'
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": open ? 'Close menu' : 'Open menu',
    "aria-expanded": open,
    onClick: onClick,
    className: "aa-nav-burger",
    style: {
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 5,
      background: 'transparent',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...bar,
      transform: open ? 'translateY(3.25px) rotate(45deg)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...bar,
      transform: open ? 'translateY(-3.25px) rotate(-45deg)' : 'none'
    }
  }));
}
function MobileMenu({
  open,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": !open,
    style: {
      position: 'fixed',
      top: 76,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 190,
      background: 'var(--white)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '28px var(--gutter) 40px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transform: open ? 'none' : 'translateY(-8px)',
      transition: 'opacity var(--duration-medium) var(--ease-standard), transform var(--duration-medium) var(--ease-standard)'
    }
  }, NAV_LINKS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: onClose,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 26,
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      textDecoration: 'none',
      padding: '14px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, l.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 28
    }
  }, Button ? /*#__PURE__*/React.createElement(Button, {
    variant: "mint",
    size: "lg",
    href: "#assessment",
    onClick: onClose
  }, "Book an Assessment") : null, Button ? /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    href: WA_URL,
    icon: /*#__PURE__*/React.createElement(WaIcon, {
      size: 18
    })
  }, "Chat on WhatsApp") : null), /*#__PURE__*/React.createElement("a", {
    href: "tel:+971527515144",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      marginTop: 22
    }
  }, "+971 52 751 5144 \xB7 Mon \u2013 Sat, 8AM \u2013 6PM"));
}
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      background: scrolled || menu ? 'rgba(255,255,255,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled && !menu ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'background var(--duration-medium) var(--ease-standard), border-color var(--duration-medium) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(LogoLockup, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    },
    className: "aa-nav-links"
  }, NAV_LINKS.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l.href,
    href: l.href
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    href: "tel:+971527515144",
    style: {
      display: 'inline-flex'
    },
    className: "aa-nav-phone"
  }, "+971 52 751 5144"), /*#__PURE__*/React.createElement(Button, {
    variant: "mint",
    size: "sm",
    href: "#assessment",
    className: "aa-nav-cta"
  }, "Book an Assessment"), /*#__PURE__*/React.createElement(BurgerButton, {
    open: menu,
    onClick: () => setMenu(v => !v)
  }))), /*#__PURE__*/React.createElement(MobileMenu, {
    open: menu,
    onClose: () => setMenu(false)
  }));
}
function StickyWhatsApp() {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "Chat on WhatsApp",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 300,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 56,
      padding: '0 22px',
      borderRadius: 'var(--radius-pill)',
      background: hover ? 'var(--action-whatsapp-hover)' : 'var(--action-whatsapp)',
      color: 'var(--white)',
      textDecoration: 'none',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 15,
      boxShadow: '0 8px 28px rgba(37, 211, 102, 0.34)',
      transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      transform: hover ? 'translateY(-1px)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(WaIcon, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "aa-wa-label"
  }, "WhatsApp"));
}
function FooterCol({
  title,
  links
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--aqua)'
    }
  }, title), links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-on-dark-secondary)',
      textDecoration: 'none'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--white)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--text-on-dark-secondary)';
    }
  }, label)));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      background: '#000',
      color: 'var(--text-on-dark-secondary)',
      overflow: 'hidden'
    },
    "data-screen-label": "Footer"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 'clamp(560px, 62vw, 880px)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/brand-footer-dusk.png",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: 'brightness(0.58) saturate(0.9)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.68) 42%, rgba(0,0,0,0.92) 75%, #000 97%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(96px, 11vw, 150px) var(--gutter) clamp(120px, 15vw, 210px)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(34px, 4.4vw, 60px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.18,
      color: 'var(--white)',
      margin: '0 auto',
      maxWidth: '20ch',
      textWrap: 'balance'
    }
  }, "Ready for a home that's tip top, top to bottom?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.82)',
      maxWidth: '46ch',
      margin: '22px auto 0'
    }
  }, "Book a free assessment and we'll build one plan around your home and your pets, with clear pricing before we begin."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, DS.Button ? /*#__PURE__*/React.createElement(DS.Button, {
    variant: "mint",
    size: "lg",
    href: "#assessment"
  }, "Book a Cleaning Assessment") : null, DS.Button ? /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "lg",
    inverse: true,
    href: WA_URL,
    icon: /*#__PURE__*/React.createElement(WaIcon, {
      size: 18
    })
  }, "Chat on WhatsApp") : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-footer-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
      gap: 48,
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(LogoLockup, {
    inverse: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.7,
      maxWidth: '34ch',
      margin: 0
    }
  }, "Meticulous cleaning and gentle pet care for Sharjah homes, so your space, your family and your animals are all in tip-top condition.")), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Services",
    links: [['Residential deep cleaning', '#services'], ['Villas & townhouses', '#villa'], ['Offices & commercial', '#services'], ['Upholstery & carpets', '#services'], ['Pet grooming at home', '#pets'], ['Pet sitting & walking', '#pets'], ['Move-in / move-out', '#services']]
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Company",
    links: [['Why Tip Top', '#why'], ['Our process', '#process'], ['Projects', '#projects'], ['FAQ', '#faq'], ['Book an assessment', '#assessment']]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--aqua)'
    }
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: WA_URL,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--white)',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(WaIcon, {
    size: 15
  }), " +971 52 751 5144"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@tiptopfm.com",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-on-dark-secondary)',
      textDecoration: 'none'
    }
  }, "info@tiptopfm.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5
    }
  }, "Al Majaz, Sharjah \xB7 United Arab Emirates"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5
    }
  }, "Mon \u2013 Sat \xB7 8AM \u2013 6PM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-on-dark)',
      padding: '24px 0 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13
    }
  }, "\xA9 2026 Tip Top Facility Management. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--aqua)'
    }
  }, "Tip Top, Top to Bottom."))));
}
Object.assign(window, {
  WaIcon,
  ArrowIcon,
  CheckIcon,
  BrandLogo,
  LogoLockup,
  Nav,
  MobileMenu,
  BurgerButton,
  StickyWhatsApp,
  Footer,
  WA_URL
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
