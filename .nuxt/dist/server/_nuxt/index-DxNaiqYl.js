import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
const _imports_0 = publicAssetsURL("/background-smoke.png");
const _imports_1 = publicAssetsURL("/logo-hyperfocus.png");
const _imports_2 = publicAssetsURL("/camera.png");
const _imports_3 = publicAssetsURL("/polygon-icon.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const scrollPercent = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-screen h-screen flex justify-center items-start bg-[#333] overflow-hidden" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="Background Smoke" class="absolute inset-0 w-full h-full object-cover z-0"><div class="mt-[80vh] w-[430px] h-[14px] bg-white z-20"></div><div class="absolute bg-white w-[14px] h-[140px] z-[21]" style="${ssrRenderStyle({
        bottom: "calc(20vh)",
        left: "calc(50% + 430px / 2 - 14px)"
      })}"></div><div class="absolute bg-white w-[14px] h-[500px] z-10" style="${ssrRenderStyle({
        bottom: "calc(20vh + 140px)",
        left: "calc(50% + 430px / 2 - 14px)"
      })}"></div><div class="absolute bg-white w-[430px] h-[14px] z-[11]" style="${ssrRenderStyle({
        bottom: "calc(20vh + 640px)",
        left: "50%",
        transform: "translateX(-50%)"
      })}"></div><div class="absolute text-white font-[Jost] text-[94px] font-bold leading-none origin-top-left z-30" style="${ssrRenderStyle({
        top: "calc(80vh)",
        left: "calc(50% - 228px)",
        transform: "rotate(-90deg)"
      })}"><span>HYPERF</span><span class="text-transparent">O</span><span>CUS</span></div><img${ssrRenderAttr("src", _imports_1)} alt="Logo Hyperfocus" class="absolute w-[150px] h-auto z-[31]" style="${ssrRenderStyle({
        top: "calc(80vh - 458px)",
        left: "calc(50% - 257px)"
      })}"><img${ssrRenderAttr("src", _imports_2)} alt="Camera" class="absolute w-[780px] h-auto z-[19]" style="${ssrRenderStyle({
        top: "calc(50% - 22px)",
        left: "calc(50% + 10px)",
        transform: "translate(-50%, -50%)"
      })}"><div class="absolute text-white font-[Jost] text-[43px] font-medium text-center z-30" style="${ssrRenderStyle({
        bottom: "calc(20vh + 640px + 10px)",
        left: "50%",
        transform: "translateX(-50%)"
      })}"> SOLUZIONI CREATIVE </div><div class="absolute text-white font-[Jost] text-[24px] font-light leading-snug text-center z-30" style="${ssrRenderStyle({
        bottom: "calc(20vh - 70px)",
        left: "50%",
        transform: "translateX(-50%)"
      })}"><span class="">SCOPRI I </span><span class="text-[32px] font-medium">NOSTRI SERVIZI</span></div><img${ssrRenderAttr("src", _imports_3)} alt="Scroll Down Icon" class="absolute w-[32px] h-auto z-30 animate-bounce" style="${ssrRenderStyle({
        bottom: "10vh",
        left: "50%",
        transform: "translateX(-50%)"
      })}"><div class="absolute top-5 left-5 bg-black/70 text-white text-sm p-2 rounded z-50 font-mono"> Scroll: ${ssrInterpolate(scrollPercent.value.toFixed(1))}%<br> ${ssrInterpolate(scrollPercent.value > 25 ? "✅ Superato 25%" : "⬆️ Sotto 25%")}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DxNaiqYl.js.map
