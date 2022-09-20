const st = new Set()

const schedular = (fn) => {
  Promise.resolve().then(() => {
    st.add(fn)
    
    setTimeout(() => {
      if(st.size === 0) return
      
      for(const work of st) work()
      st.clear()
    })
  })
}

export default schedular