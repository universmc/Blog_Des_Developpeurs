function current_unix_time() {
  date +%s
}

echo "🕛 $(current_unix_time)"

now=$((timeStamp_origine + $(date +%s)))
