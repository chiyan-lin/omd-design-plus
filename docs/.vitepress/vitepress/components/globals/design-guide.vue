<template>
  <div class="guide-design">
    <div class="docs-row cards" style="margin-left: -7px; margin-right: -7px">
      <div
        class="docs-col docs-col-24 docs-col-xs-12 docs-col-sm-6 is-guttered"
      >
        <div class="card">
          <consistency-svg m="4" w="20" alt="Consistency" />
          <p>一致</p>
        </div>
      </div>
      <div
        class="docs-col docs-col-24 docs-col-xs-12 docs-col-sm-6 is-guttered"
      >
        <div class="card">
          <feedback-svg m="4" w="20" alt="Feedback" />
          <p>反馈</p>
        </div>
      </div>
      <div
        class="docs-col docs-col-24 docs-col-xs-12 docs-col-sm-6 is-guttered"
      >
        <div class="card">
          <efficiency-svg m="4" w="20" alt="Efficiency" />
          <p>效率</p>
        </div>
      </div>
      <div
        class="docs-col docs-col-24 docs-col-xs-12 docs-col-sm-6 is-guttered"
      >
        <div class="card">
          <controllability-svg m="4" w="20" alt="Controllability" />
          <p>可控</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.docs-col {
  padding: 0 7px;
}
.card {
  background: var(--docs-fill-color-lighter);
  height: 204px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-weight: bolder;
  }
  img {
    margin: 1rem;
    width: 5rem;
    height: 5rem;
  }
}

@media screen and (max-width: 767px) {
  .docs-col {
    padding-bottom: 8px;
  }
}

.docs-row {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
}
.docs-row:last-child {
  margin-bottom: 0;
}
.docs-col {
  border-radius: 4px;
}
.docs-col-sm-6 {
  display: block;
  max-width: 25%;
  flex: 0 0 25%;
}
.docs-col {
  padding: 0 7px;
}
.docs-col-24 {
  // max-width: 100%;
  flex: 0 0 100%;
}

[class*='docs-col-'].is-guttered {
  display: block;
  min-height: 1px;
}
</style>
