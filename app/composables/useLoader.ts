import { ElLoading } from 'element-plus'

export const useLoader = () => {
  let loading: any = null

  const open = (text = 'Loading...') => {
    loading = ElLoading.service({
      lock: true,
      text,
      background: 'rgba(0, 0, 0, 0.7)',
    })
  }

  const close = () => {
    loading?.close()
    loading = null
  }

  return { open, close }
}
