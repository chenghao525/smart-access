<template>
  <div class="pagination_bar">
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="pagination.currentPage"
                   :page-size="pagination.numOfSinglePages"
                   layout="prev, pager, next, total, jumper"
                   :total="pagination.total"
                   large>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name:'CustomPagination',
  data(){
    return{
      currentPageNum: this.pagination.currentPage
    }
  },
  props: {
      pagination: {
        currentPage: {
          type: Number,
          default: 1
        },
        numOfSinglePages: {
          type: Number,
          default: 10
        },
        total: {
          type: Number,
          default: 0
        }
      }
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页${val}条`)
      },
      handleCurrentChange(val) {
        this.currentPageNum = val;
        this.$emit("currentPageChange", val)
      },
    }

}
</script>