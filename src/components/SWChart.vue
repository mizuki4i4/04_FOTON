<script>
// ここでこのコンポーネントで使用するグラフの種類を定義する。今回はドーナツグラフなのでDoughnutとなる。
import { Doughnut } from 'vue-chartjs'

export default ({
  extends: Doughnut,
  data() {
    return {
      datas: {
        // 凡例とツールチップに表示するラベル
        labels: ['HIGH', 'MEDIUM', 'LOW', 'INFORMATIONAL'],
        // 表示するデータ
        datasets: [
          {
            data: [3, 2, 3, 4],
            backgroundColor: ['#FF0000', '#FF5F17', '#C0C0C0', '#F5F5F5'],
            borderColor: 'transparent'
          }
        ]
      },
      options: {
        responsive: true,
      }
    }
  },
  mounted() {
    this.renderChart(this.datas, this.options)
  }
})
</script>