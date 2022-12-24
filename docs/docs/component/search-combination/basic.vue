<template>
  <div>
    <omd-search-combination
      :searchConditions="[
        {
          is: 'a-input',
          label: '名字',
          value: 'name',
        },
        {
          is: 'a-radio-group',
          props: {
            options: [
              { label: '男', value: 'man' },
              { label: '女', value: 'woman' },
            ],
          },
          label: '性别',
          value: 'sex',
        },
        {
          is: 'a-input-number',
          label: '年龄',
          value: 'age',
        },
      ]"
    ></omd-search-combination>
  </div>
</template>
