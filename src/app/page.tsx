export default function Home() {
  return (
    <>
    <div className="arjs-loader">
    <div>Loading, please wait...</div>
  </div>
    <div dangerouslySetInnerHTML={{__html:`  
  <a-scene
    vr-mode-ui="enabled: false;"
    renderer="logarithmicDepthBuffer: true; precision: medium;"
    embedded
    arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
  >
    <!-- we use cors proxy to avoid cross-origin problems ATTENTION! you need to set up your server -->
    <a-nft
      type="nft"
      url="/p1.jpg"
      smooth="true"
      smoothCount="10"
      smoothTolerance=".01"
      smoothThreshold="5"
    >
      <a-entity
        gltf-model="https://ar-js-org.github.io/.github/profile/aframe/examples/image-tracking/nft/trex/scene.gltf"
        scale="5 5 5"
        position="150 300 -100"
      >
      </a-entity>
    </a-nft>
    <a-entity camera></a-entity>
  </a-scene>`}}></div></>
  );
}
