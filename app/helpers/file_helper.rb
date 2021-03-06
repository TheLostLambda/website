module FileHelper
  def syntax_highlighter_for_filename(filename, track)
    extension = filename.split(".").last.try(&:downcase)
    lang = Exercism::PrismFileMappings[extension] ||
           track.syntax_highligher_language

    "language-#{lang}"
  end
end
