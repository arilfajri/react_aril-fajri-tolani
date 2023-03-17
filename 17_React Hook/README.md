(17) React Hook

1. Hook
   React hooks, hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.
   Hooks dasar :

- useState
- useEffect
- useContext
  Hooks Tambahan :
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

2. Aturan pada Hook
   -Hanya panggil Hooks di tingkat atas
   Jangan memanggil Hooks dari dalam loops, conditions, atau nested functions
   -Hanya panggil hooks dari fungsi-fungsi react
   Jangan memanggil hooks dari fungsi-fungsi Javascript biasa.
   Kita dapat:
   -Memanggil Hooks dari komponen-komponen fungsi React.
   -Memanggil Hooks dari custom Hooks.

3. Custom Hooks
   Membuat Hook kita sendiri memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.
